import type { MetadataRoute } from "next";

const BASE_URL =
 process.env.NEXT_PUBLIC_SITE_URL ?? "https://buybuilderdirect.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
 const now = new Date();

 const staticRoutes: MetadataRoute.Sitemap = [
  { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
  { url: `${BASE_URL}/investments`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
  { url: `${BASE_URL}/how-it-works`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE_URL}/case-studies`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  { url: `${BASE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
 ];

 const investmentRoutes: MetadataRoute.Sitemap = [
  "co-living-homes",
  "rooming-houses",
  "sda-ndis-homes",
  "house-and-land",
  "custom-builds",
  "developments",
  "knock-down-rebuild",
 ].map((slug) => ({
  url: `${BASE_URL}/investments/${slug}`,
  lastModified: now,
  changeFrequency: "monthly" as const,
  priority: 0.8,
 }));

 return [...staticRoutes, ...investmentRoutes];
}
