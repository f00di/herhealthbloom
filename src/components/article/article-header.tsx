import Image from "next/image";
import Link from "next/link";
import { getTopic } from "@/config/topics";
import type { Article } from "@/types/article";

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
}

export function ArticleMeta({ article }: { article: Article }) {
  return <div className="article-meta">
    <span>By {article.author}, {article.authorCredentials}</span>
    {article.publishedAt ? <span>Published <time dateTime={article.publishedAt}>{formatDate(article.publishedAt)}</time></span> : null}
    {article.updatedAt ? <span>Updated <time dateTime={article.updatedAt}>{formatDate(article.updatedAt)}</time></span> : null}
  </div>;
}

export function ArticleHeader({ article }: { article: Article }) {
  const topic = getTopic(article.category);
  return <header className="article-header">
    <Link className="topic-label" href={`/articles?topic=${article.category}`}>{topic?.title}</Link>
    <h1>{article.title}</h1>
    <p className="article-deck">{article.excerpt}</p>
    <ArticleMeta article={article} />
    {article.contentStatus !== "complete" ? <p className="content-status"><strong>Content status:</strong> Authoritative source document missing. Clinical content is not published.</p> : null}
    {article.featuredImage ? <div className="article-featured-image"><Image src={article.featuredImage.src} alt={article.featuredImage.alt} width={article.featuredImage.width} height={article.featuredImage.height} priority sizes="(max-width: 900px) 100vw, 840px" /></div> : null}
  </header>;
}
