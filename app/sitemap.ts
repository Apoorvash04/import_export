import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.meghfoods.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/about", "/products", "/markets", "/contact"].map((path, index) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: index === 0 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : index === 2 ? 0.9 : 0.8,
  }));
}
