import type { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { blogs } from "@/data/blogs";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://buybuilderdirect.com.au";

function galleryProjectSlugs(): string[] {
  const projectsDir = path.join(process.cwd(), "public", "images", "projects");
  if (!fs.existsSync(projectsDir)) return [];

  return fs
    .readdirSync(projectsDir, { withFileTypes: true })
    .filter((dir) => dir.isDirectory())
    .filter((dir) => {
      const dirPath = path.join(projectsDir, dir.name);
      try {
        return fs
          .readdirSync(dirPath)
          .some(
            (file) =>
              /\.(jpg|jpeg|png|webp)$/i.test(file) &&
              fs.statSync(path.join(dirPath, file)).size > 40_000
          );
      } catch {
        return false;
      }
    })
    .map((dir) => dir.name);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/investments`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/how-it-works`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/gallery`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/virtual-display-homes`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/roi-calculator`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/case-studies`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
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

  const galleryRoutes: MetadataRoute.Sitemap = galleryProjectSlugs().map(
    (slug) => ({
      url: `${BASE_URL}/gallery/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })
  );

  const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => ({
    url: `${BASE_URL}/blog/${blog.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...investmentRoutes, ...galleryRoutes, ...blogRoutes];
}
