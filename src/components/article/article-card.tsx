import Image from "next/image";
import Link from "next/link";
import { getTopic } from "@/config/topics";
import { ArrowIcon } from "@/components/ui/icons";
import type { ArticleSummary } from "@/types/article";

export function ArticleCard({ article }: { article: ArticleSummary }) {
  const topic = getTopic(article.category);
  return (
    <article className="article-card">
      <Link className="article-card-image" href={`/articles/${article.slug}`} tabIndex={-1} aria-hidden="true">
        {article.featuredImage ? <Image src={article.featuredImage.src} alt="" width={article.featuredImage.width} height={article.featuredImage.height} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 370px" /> : <span className="image-fallback" />}
      </Link>
      <div className="article-card-body">
        <div className="card-kicker-row"><span className="topic-label">{topic?.title ?? article.category}</span>{article.contentStatus !== "complete" ? <span className="status-label">Source pending</span> : null}</div>
        <h3><Link href={`/articles/${article.slug}`}>{article.title}</Link></h3>
        <p>{article.excerpt}</p>
        <Link className="text-link" href={`/articles/${article.slug}`}>Read article <ArrowIcon /></Link>
      </div>
    </article>
  );
}

export function ArticleGrid({ articles }: { articles: readonly ArticleSummary[] }) {
  return <div className="article-grid">{articles.map((article) => <ArticleCard article={article} key={article.slug} />)}</div>;
}
