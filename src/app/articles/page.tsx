import type { Metadata } from "next";
import { ArticleSearch } from "@/components/search/article-search";
import { getAllArticles, toArticleSummary } from "@/lib/articles";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("Women's Health Articles", "Search and browse patient-friendly educational articles about pregnancy, menstrual health, fertility, menopause, general women's health, and breast health.", "/articles");

export default async function ArticlesPage() {
  const articles = (await getAllArticles()).map(toArticleSummary);
  return <div className="page-shell"><header className="page-hero container narrow-page"><h1>Articles / Blog</h1></header><section className="container section section-first" aria-label="Search and browse articles"><ArticleSearch articles={articles} /></section></div>;
}
