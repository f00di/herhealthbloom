import "server-only";

import { promises as fs } from "node:fs";
import path from "node:path";
import { cache } from "react";
import { validateArticle } from "@/lib/article-validation";
import type { Article, ArticleSummary } from "@/types/article";

const articlesDirectory = path.join(process.cwd(), "content", "articles");

export const getAllArticles = cache(async (): Promise<Article[]> => {
  const filenames = (await fs.readdir(articlesDirectory)).filter((name) => name.endsWith(".json")).sort();
  const articles = await Promise.all(filenames.map(async (filename) => {
    const raw = await fs.readFile(path.join(articlesDirectory, filename), "utf8");
    return validateArticle(JSON.parse(raw) as unknown, filename);
  }));
  const slugs = articles.map((article) => article.slug);
  if (new Set(slugs).size !== slugs.length) throw new Error("Article slugs must be globally unique");
  const known = new Set(slugs);
  for (const article of articles) {
    for (const related of article.relatedArticles) if (!known.has(related)) throw new Error(`${article.slug}: unknown related article “${related}”`);
  }
  return articles.sort((a, b) => (b.publishedAt ?? "").localeCompare(a.publishedAt ?? "") || a.title.localeCompare(b.title));
});

export async function getArticleBySlug(slug: string): Promise<Article | undefined> {
  return (await getAllArticles()).find((article) => article.slug === slug);
}

export function toArticleSummary(article: Article): ArticleSummary {
  const { slug, title, excerpt, category, keywords, featuredImage, publishedAt, updatedAt, contentStatus } = article;
  return { slug, title, excerpt, category, keywords, contentStatus, ...(featuredImage ? { featuredImage } : {}), ...(publishedAt ? { publishedAt } : {}), ...(updatedAt ? { updatedAt } : {}) };
}
