import Link from "next/link";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { ArticleGrid } from "@/components/article/article-card";
import { siteConfig } from "@/config/site";
import type { Article, ArticleSummary, Reference } from "@/types/article";

export function ReferencesSection({ references }: { references: readonly Reference[] }) {
  return <section className="article-section references-section" aria-labelledby="references-heading"><details><summary id="references-heading">References</summary><div className="references-content"><p>The health content is built on evidencebased research and reviewed by medical experts to ensure it stays accurate, trustworthy, and aligned with current clinical standards.</p><h2>Sources:</h2>{references.length ? <ul className="references-list">{references.map((reference, index) => <li key={`${reference.label}-${index}`}>{reference.url ? <a href={reference.url} rel="noopener noreferrer">{reference.label}</a> : reference.label}{reference.note ? <span> — {reference.note}</span> : null}</li>)}</ul> : <p className="empty-supporting-content">The source reference list is not available and has not been reconstructed.</p>}</div></details></section>;
}

export function ArticleFAQ({ items, title }: { items: Article["faq"]; title: string }) {
  return <section className="article-section" aria-labelledby="article-faq-heading"><h2 id="article-faq-heading">{title}</h2>{items.length ? <FAQAccordion items={items} /> : <p className="empty-supporting-content">Article-specific FAQs are awaiting the authoritative source document.</p>}</section>;
}

export function AuthorBox({ article }: { article: Article }) {
  return <aside className="author-box" aria-labelledby="author-box-heading"><span className="author-initials" aria-hidden="true">FK</span><div><p className="eyebrow">About the author</p><h2 id="author-box-heading">{article.author}, {article.authorCredentials}</h2><p>{siteConfig.author.role}</p><p>{article.author}, {article.authorCredentials}, is a physician specialized in Obstetrics &amp; Gynecology with a strong interest in women&apos;s health education and evidence-based medicine.</p><Link className="text-link" href="/about">About this website</Link></div></aside>;
}

export function MedicalDisclaimer() {
  return <aside className="article-disclaimer" aria-labelledby="disclaimer-heading"><h2 id="disclaimer-heading">Medical Disclaimer</h2><p>{siteConfig.medicalDisclaimer} Always seek the advice of your healthcare provider with any questions you may have regarding a medical condition, pregnancy, or reproductive health. Never disregard professional medical advice or delay seeking it because of something you have read or seen on this website.</p><Link href="/privacy#medical-disclaimer">Privacy Policy &amp; Medical Disclaimer</Link></aside>;
}

export function RelatedArticles({ articles }: { articles: readonly ArticleSummary[] }) {
  if (!articles.length) return null;
  return <section className="related-articles section" aria-labelledby="related-heading"><div className="section-heading"><div><p className="eyebrow">Continue reading</p><h2 id="related-heading">Related articles</h2></div></div><ArticleGrid articles={articles} /></section>;
}
