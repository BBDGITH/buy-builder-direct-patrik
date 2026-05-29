import type { NextConfig } from "next";

const BASE_URL =
 process.env.NEXT_PUBLIC_SITE_URL ?? "https://buybuilderdirect.com.au";

// ── Security headers applied to all routes ────────────────────────────────────
const securityHeaders = [
 // Prevent MIME-type sniffing
 { key: "X-Content-Type-Options", value: "nosniff" },
 // Block clickjacking
 { key: "X-Frame-Options", value: "SAMEORIGIN" },
 // Legacy XSS filter (belt-and-suspenders)
 { key: "X-XSS-Protection", value: "1; mode=block" },
 // DNS prefetch control
 { key: "X-DNS-Prefetch-Control", value: "on" },
 // Referrer policy
 { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
 // Permissions policy (deny unneeded browser features)
 {
  key: "Permissions-Policy",
  value: "camera=(), microphone=(), geolocation=(), payment=()",
 },
 // HSTS — only enable once you're live on HTTPS
 {
  key: "Strict-Transport-Security",
  value: "max-age=63072000; includeSubDomains; preload",
 },
 // Content Security Policy
 // Allows: self, Google Fonts, Framer Motion inline styles, Vercel Analytics
 {
  key: "Content-Security-Policy",
  value: [
   "default-src 'self'",
   "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://*.vercel-scripts.com",
   "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
   "font-src 'self' https://fonts.gstatic.com data:",
   "img-src 'self' data: blob: https:",
   "connect-src 'self' https://api.resend.com https://vitals.vercel-insights.com",
   "frame-ancestors 'self'",
   "base-uri 'self'",
   "form-action 'self'",
  ]
   .join("; ")
   .trim(),
 },
];

const nextConfig: NextConfig = {
 // ── Security headers ────────────────────────────────────────────────────────
 async headers() {
  return [
   {
    source: "/(.*)",
    headers: securityHeaders,
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
