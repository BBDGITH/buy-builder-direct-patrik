# Deploying Buy Builder Direct on DigitalOcean

This app is a **Next.js 16** site with API routes (contact form). It must run on a server with **Node.js** — not static hosting.

## Domain: code vs dashboard?

**The domain is configured in the DigitalOcean dashboard (and your domain registrar), not in application code.**

| What | Where |
|------|--------|
| Point `buybuilderdirect.com.au` → your droplet IP | **Domain registrar** (GoDaddy) or **DigitalOcean Networking → Domains** |
| SSL certificate (Let's Encrypt) | **Droplet** via Certbot (see below) |
| App env vars (`RESEND_API_KEY`, etc.) | **`.env.production`** on the server (never commit) |
| Canonical site URL | **`NEXT_PUBLIC_SITE_URL`** env var |

Code only reads `NEXT_PUBLIC_SITE_URL` for sitemap/OG tags. DNS and TLS are infrastructure.

---

## 1. Create a Droplet

- **Image:** Ubuntu 24.04 LTS
- **Size:** 1 GB RAM minimum (2 GB recommended for builds)
- **Region:** Sydney (`syd1`) if available, else closest to AU users

Install Docker on the droplet:

```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
```

---

## 2. Clone & configure

```bash
git clone https://github.com/abd84/buy-builder-direct-patrik.git
cd buy-builder-direct-patrik/web
cp .env.example .env.production
nano .env.production
```

Required in `.env.production`:

```env
NEXT_PUBLIC_SITE_URL=https://buybuilderdirect.com.au
RESEND_API_KEY=re_...
CONTACT_EMAIL=info@buybuilderdirect.com.au
RESEND_FROM_EMAIL=onboarding@resend.dev
# Optional — durable rate limiting on multi-instance:
# UPSTASH_REDIS_REST_URL=...
# UPSTASH_REDIS_REST_TOKEN=...
```

---

## 3. Build & run

```bash
docker compose build
docker compose up -d
```

The app listens on port 3000 inside Docker; nginx exposes 80/443.

---

## 4. DNS (GoDaddy → DigitalOcean)

In **GoDaddy DNS** for `buybuilderdirect.com.au`:

| Type | Name | Value |
|------|------|--------|
| A | `@` | `<your-droplet-IP>` |
| A | `www` | `<your-droplet-IP>` |

Wait 5–30 minutes for propagation.

---

## 5. SSL with Let's Encrypt

On first deploy, temporarily comment out the HTTPS `return 301` block in `deploy/nginx.conf` and use HTTP-only until certs exist.

```bash
mkdir -p deploy/certbot/www deploy/certbot/conf
docker run -it --rm \
  -v $(pwd)/deploy/certbot/conf:/etc/letsencrypt \
  -v $(pwd)/deploy/certbot/www:/var/www/certbot \
  certbot/certbot certonly --webroot -w /var/www/certbot \
  -d buybuilderdirect.com.au -d www.buybuilderdirect.com.au \
  --email info@buybuilderdirect.com.au --agree-tos
docker compose restart nginx
```

Renewal (add to crontab):

```bash
0 3 * * * cd /path/to/web && docker run --rm -v $(pwd)/deploy/certbot/conf:/etc/letsencrypt -v $(pwd)/deploy/certbot/www:/var/www/certbot certbot/certbot renew && docker compose restart nginx
```

---

## 6. Security already in the app

- CSP, HSTS, X-Frame-Options, Permissions-Policy (`next.config.ts`)
- Contact API: rate limiting, honeypot, timing check, Zod validation
- nginx: rate limits on `/` and `/api/`, TLS 1.2+, gzip
- Docker: non-root `nextjs` user, healthcheck
- Production fails if `RESEND_API_KEY` missing (no fake success)

---

## 7. Updates

```bash
git pull
docker compose build --no-cache
docker compose up -d
```

---

## Alternative: PM2 without Docker

```bash
npm ci && npm run build
NODE_ENV=production pm2 start npm --name bbd-web -- start
```

Use nginx as reverse proxy to `localhost:3000` with the same `deploy/nginx.conf` (change upstream to `127.0.0.1:3000`).
