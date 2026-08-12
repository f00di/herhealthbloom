import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";
import { getSiteOrigin } from "@/config/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const origin = getSiteOrigin();
  const staticPaths = ["", "/articles", "/about", "/faq", "/contact", "/privacy"];
  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({ url: `${origin}${path}`, changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : path === "/articles" ? 0.9 : 0.6 }));
  const articles: MetadataRoute.Sitemap = (await getAllArticles()).filter((article) => article.contentStatus === "complete").map((article) => ({ url: `${origin}/articles/${article.slug}`, ...(article.updatedAt || article.publishedAt ? { lastModified: article.updatedAt ?? article.publishedAt } : {}), changeFrequency: "monthly", priority: 0.8 }));
  return [...staticEntries, ...articles];
}
