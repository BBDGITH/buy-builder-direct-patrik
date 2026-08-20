import type { NextConfig } from "next";

const BASE_URL =
 process.env.NEXT_PUBLIC_SITE_URL ?? "https://buybuilderdirect.com.au";

const isDev = process.env.NODE_ENV === "development";

function buildSecurityHeaders() {
 const scriptSrc = [
  "'self'",
  "'unsafe-inline'",
  ...(isDev ? ["'unsafe-eval'"] : []),
  "https://vercel.live",
  "https://*.vercel-scripts.com",
  "https://connect.facebook.net",
 ].join(" ");

 const csp = [
  "default-src 'self'",
  `script-src ${scriptSrc}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data: blob: https:",
  "connect-src 'self' https://api.resend.com https://vitals.vercel-insights.com https://my.matterport.com https://www.facebook.com https://connect.facebook.net",
  "frame-src 'self' https://my.matterport.com",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  ...(isDev ? [] : ["upgrade-insecure-requests"]),
 ].join("; ");

 return [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
   key: "Permissions-Policy",
   value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
  // HSTS only in production (breaks plain HTTP localhost in dev)
  ...(isDev
   ? []
   : [
      {
       key: "Strict-Transport-Security",
       value: "max-age=63072000; includeSubDomains; preload",
      },
     ]),
  { key: "Content-Security-Policy", value: csp },
 ];
}

const nextConfig: NextConfig = {
 output: "standalone",

 async headers() {
  return [
   {
    source: "/(.*)",
    headers: buildSecurityHeaders(),
   },
  ];
 },

 // ── Image optimisation ──────────────────────────────────────────────────────
 images: {
  formats: ["image/avif", "image/webp"],
  deviceSizes: [375, 640, 768, 1024, 1280, 1536],
  minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
 },

 // ── Redirects ───────────────────────────────────────────────────────────────
 async redirects() {
  return [
   // Canonical trailing-slash redirect (no trailing slash)
   {
    source: "/:path+/",
    destination: "/:path+",
    permanent: true,
   },
  ];
 },

 // ── Production source maps ──────────────────────────────────────────────────
 productionBrowserSourceMaps: false,
};

// Suppress unused variable warning for BASE_URL (used in headers comment)
void BASE_URL;

export default nextConfig;
