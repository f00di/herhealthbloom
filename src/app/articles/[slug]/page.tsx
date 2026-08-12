import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/article/article-body";
import { ArticleHeader } from "@/components/article/article-header";
import { ArticleFAQ, AuthorBox, MedicalDisclaimer, ReferencesSection, RelatedArticles } from "@/components/article/article-sections";
import { TableOfContents } from "@/components/article/table-of-contents";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { getTopic } from "@/config/topics";
import { getAbsoluteUrl, siteConfig } from "@/config/site";
import { getAllArticles, getArticleBySlug, toArticleSummary } from "@/lib/articles";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() { return (await getAllArticles()).map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) return { title: "Article not found" };
  const shareableFeaturedImage = article.featuredImage && /\.(?:avif|jpe?g|png|webp)$/i.test(article.featuredImage.src) ? article.featuredImage : undefined;
  const image = shareableFeaturedImage ? [{ url: getAbsoluteUrl(shareableFeaturedImage.src), width: shareableFeaturedImage.width, height: shareableFeaturedImage.height, alt: shareableFeaturedImage.alt }] : [{ url: getAbsoluteUrl("/images/social-card.png"), width: 1200, height: 630, alt: siteConfig.siteName }];
  const articleUrl = getAbsoluteUrl(`/articles/${article.slug}`);
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: { canonical: articleUrl },
    robots: article.contentStatus === "complete" ? undefined : { index: false, follow: true },
    openGraph: article.contentStatus === "complete" ? { type: "article", title: article.metaTitle, description: article.metaDescription, url: articleUrl, authors: [`${article.author}, ${article.authorCredentials}`], ...(article.publishedAt ? { publishedTime: article.publishedAt } : {}), ...(article.updatedAt ? { modifiedTime: article.updatedAt } : {}), images: image } : { type: "website", title: article.metaTitle, description: article.metaDescription, url: articleUrl, images: image },
    twitter: { card: "summary_large_image", title: article.metaTitle, description: article.metaDescription, images: image.map((item) => item.url) },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();
  const topic = getTopic(article.category);
  const allArticles = await getAllArticles();
  const related = article.relatedArticles.map((relatedSlug) => allArticles.find((candidate) => candidate.slug === relatedSlug)).filter((candidate) => candidate !== undefined).map(toArticleSummary);
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Articles", href: "/articles" },
    { label: topic?.title ?? article.category, href: `/articles?topic=${article.category}` },
    { label: article.title },
  ];
  const pageSchema: Record<string, unknown> = article.contentStatus === "complete" ? {
    "@context": "https://schema.org", "@type": "Article", headline: article.title, description: article.metaDescription,
    url: getAbsoluteUrl(`/articles/${article.slug}`), mainEntityOfPage: getAbsoluteUrl(`/articles/${article.slug}`),
    author: { "@type": "Person", name: article.author, honorificSuffix: article.authorCredentials, jobTitle: siteConfig.author.role },
    ...(article.publishedAt ? { datePublished: article.publishedAt } : {}), ...(article.updatedAt ? { dateModified: article.updatedAt } : {}),
    ...(article.featuredImage ? { image: getAbsoluteUrl(article.featuredImage.src) } : {}),
  } : { "@context": "https://schema.org", "@type": "WebPage", name: article.title, description: article.metaDescription, url: getAbsoluteUrl(`/articles/${article.slug}`) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: breadcrumbs.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.label, ...(item.href ? { item: getAbsoluteUrl(item.href) } : {}) })) };
  const faqSchema = article.contentStatus === "complete" && article.faq.length ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: article.faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: [item.answer, ...(item.items ?? []), item.closing].filter(Boolean).join(" ") } })) } : null;

  return <div className="article-page"><div className="container article-breadcrumbs"><Breadcrumbs items={breadcrumbs} /></div><article className="container article-wrapper"><div className="article-main"><ArticleHeader article={article} /><TableOfContents blocks={article.body} variant="mobile" /><ArticleBody blocks={article.body} /><ArticleFAQ items={article.faq} /><ReferencesSection references={article.references} /><AuthorBox article={article} /><MedicalDisclaimer /></div><div className="article-toc-column"><TableOfContents blocks={article.body} variant="desktop" /></div></article><div className="container"><RelatedArticles articles={related} /></div><JsonLd data={[pageSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])]} /></div>;
}
