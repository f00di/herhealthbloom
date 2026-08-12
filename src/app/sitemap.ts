import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";
import { getAbsoluteUrl } from "@/config/site";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = ["", "/articles", "/about", "/faq", "/contact", "/privacy"];
  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({ url: getAbsoluteUrl(path || "/"), changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : path === "/articles" ? 0.9 : 0.6 }));
  const articles: MetadataRoute.Sitemap = (await getAllArticles()).filter((article) => article.contentStatus === "complete").map((article) => ({ url: getAbsoluteUrl(`/articles/${article.slug}`), ...(article.updatedAt || article.publishedAt ? { lastModified: article.updatedAt ?? article.publishedAt } : {}), changeFrequency: "monthly", priority: 0.8 }));
  return [...staticEntries, ...articles];
}
