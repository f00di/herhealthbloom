import type { Metadata } from "next";
import { ArticleSearch } from "@/components/search/article-search";
import { getAllArticles, toArticleSummary } from "@/lib/articles";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("Women's Health Articles", "Search and browse patient-friendly educational articles about pregnancy, menstrual health, fertility, menopause, general women's health, and breast health.", "/articles");

export default async function ArticlesPage({ searchParams }: { searchParams: Promise<{ topic?: string | string[] }> }) {
  const parameters = await searchParams;
  const initialTopic = typeof parameters.topic === "string" ? parameters.topic : "";
  const articles = (await getAllArticles()).map(toArticleSummary);
  return <div className="page-shell"><header className="page-hero container narrow-page"><p className="eyebrow">Articles / Blog</p><h1>Women’s health articles</h1><p>Search educational article records by title, description, category, or keyword. Records whose authoritative source is unavailable are clearly identified and do not present reconstructed clinical advice.</p></header><section className="container section section-first" aria-label="Search and browse articles"><ArticleSearch articles={articles} initialTopic={initialTopic} /></section></div>;
}
