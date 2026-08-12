import Link from "next/link";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { ArticleGrid } from "@/components/article/article-card";
import { siteConfig } from "@/config/site";
import type { Article, ArticleSummary, Reference } from "@/types/article";

export function ReferencesSection({ references }: { references: readonly Reference[] }) {
  return <section className="article-section" aria-labelledby="references-heading"><h2 id="references-heading">References and sources</h2><p>The health content is built on evidence-based research and reviewed by medical experts to ensure it stays accurate, trustworthy, and aligned with current clinical standards.</p>{references.length ? <ol className="references-list">{references.map((reference, index) => <li key={`${reference.label}-${index}`}>{reference.url ? <a href={reference.url} rel="noopener noreferrer">{reference.label}</a> : reference.label}{reference.note ? <span> — {reference.note}</span> : null}</li>)}</ol> : <p className="empty-supporting-content">The source reference list is not available and has not been reconstructed.</p>}</section>;
}

export function ArticleFAQ({ items }: { items: Article["faq"] }) {
  return <section className="article-section" aria-labelledby="article-faq-heading"><h2 id="article-faq-heading">Frequently asked questions</h2>{items.length ? <FAQAccordion items={items} /> : <p className="empty-supporting-content">Article-specific FAQs are awaiting the authoritative source document.</p>}</section>;
}

export function AuthorBox({ article }: { article: Article }) {
  return <aside className="author-box" aria-labelledby="author-box-heading"><span className="author-initials" aria-hidden="true">DK</span><div><p className="eyebrow">About the author</p><h2 id="author-box-heading">{article.author}, {article.authorCredentials}</h2><p>{siteConfig.author.role}. This page is provided for education and does not establish a clinician–patient relationship.</p><Link className="text-link" href="/about">About this website</Link></div></aside>;
}

export function MedicalDisclaimer() {
  return <aside className="article-disclaimer" aria-labelledby="disclaimer-heading"><h2 id="disclaimer-heading">Medical disclaimer</h2><p>{siteConfig.medicalDisclaimer} Consult an appropriate healthcare professional about medical questions. If you believe you are experiencing a medical emergency, contact an appropriate emergency healthcare service.</p><Link href="/privacy#medical-disclaimer">Read the full privacy policy and medical disclaimer</Link></aside>;
}

export function RelatedArticles({ articles }: { articles: readonly ArticleSummary[] }) {
  if (!articles.length) return null;
  return <section className="related-articles section" aria-labelledby="related-heading"><div className="section-heading"><div><p className="eyebrow">Continue reading</p><h2 id="related-heading">Related articles</h2></div></div><ArticleGrid articles={articles} /></section>;
}
