import { getTopic } from "@/config/topics";
import type { ArticleSummary } from "@/types/article";

export function normalizeSearch(value: string): string {
  return value.normalize("NFKD").toLocaleLowerCase().trim().replace(/\s+/g, " ");
}

export function filterArticles(articles: readonly ArticleSummary[], query: string, topic?: string): ArticleSummary[] {
  const tokens = normalizeSearch(query).split(" ").filter(Boolean);
  return articles.filter((article) => {
    if (topic && article.category !== topic) return false;
    const category = getTopic(article.category)?.title ?? article.category;
    const haystack = normalizeSearch([article.title, article.excerpt, category, ...article.keywords].join(" "));
    return tokens.every((token) => haystack.includes(token));
  });
}
