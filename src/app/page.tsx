import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleGrid } from "@/components/article/article-card";
import { HealthTopicCard } from "@/components/home/health-topic-card";
import { ArrowIcon } from "@/components/ui/icons";
import { healthTopics } from "@/config/topics";
import { siteConfig } from "@/config/site";
import { getAllArticles, toArticleSummary } from "@/lib/articles";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("Trusted Women's Health Information", "Evidence-based educational information in gynecology, pregnancy, and breast health, explained clearly under the supervision of Dr. Farkhanda Kashif.", "/");

export default async function HomePage() {
  const articles = (await getAllArticles()).slice(0, 8).map(toArticleSummary);
  return <>
    <section className="hero"><div className="container hero-grid"><div className="hero-copy">
      <p className="eyebrow">Women’s health education</p>
      <h1>Trusted Women’s Health Information, Explained Clearly</h1>
      <p className="hero-support">Evidence-Based Information and Education in Gynecology, Pregnancy, and Breast Health</p>
      <p>Welcome to the educational and informative website of {siteConfig.author.name} ({siteConfig.author.credentials}), {siteConfig.author.role}, dedicated to providing accurate, evidence-based information on women’s health. The mission is to help women better understand their health through clear and reliable medical resources.</p>
      <div className="button-row"><Link className="button button-primary" href="/articles">Explore Articles <ArrowIcon /></Link><Link className="button button-secondary" href="#health-topics">Browse Health Topics</Link></div>
    </div><div className="hero-art"><Image src="/images/hero-botanical.svg" width={760} height={640} alt="Open book surrounded by calm botanical shapes, representing accessible women’s health education" priority sizes="(max-width: 900px) 92vw, 560px" /></div></div></section>

    <section className="section" aria-labelledby="latest-heading"><div className="container"><div className="section-heading"><div><p className="eyebrow">Educational library</p><h2 id="latest-heading">Latest articles</h2><p>Read the current evidence-based pregnancy articles in a clear, patient-friendly format.</p></div><Link className="text-link desktop-only-link" href="/articles">View all articles <ArrowIcon /></Link></div><ArticleGrid articles={articles} /></div></section>

    <section className="section topic-section" id="health-topics" aria-labelledby="topics-heading"><div className="container"><div className="section-heading narrow"><div><p className="eyebrow">Browse by subject</p><h2 id="topics-heading">Health topics</h2><p>Start with one of six core areas. New medically reviewed articles will appear automatically within their topic.</p></div></div><div className="topic-grid">{healthTopics.map((topic) => <HealthTopicCard topic={topic} key={topic.slug} />)}</div></div></section>

    <section className="section trust-section" aria-labelledby="trust-heading"><div className="container trust-grid"><div><p className="eyebrow">About this resource</p><h2 id="trust-heading">Medical information with clarity and care</h2><p>Whether you are looking for information about menstrual health, pregnancy, fertility, breast conditions, menopause, contraception, or common gynecological concerns, the website provides medically reviewed blogs and articles designed to support informed conversations with family, friends, and healthcare providers.</p><p>Content is developed in clear, patient-friendly language, with references and educational illustrations where appropriate.</p><Link className="text-link" href="/about">Learn about the website <ArrowIcon /></Link></div><ul className="trust-list"><li><strong>Qualified supervision</strong><span>Managed under the supervision of {siteConfig.author.name}, {siteConfig.author.credentials}</span></li><li><strong>Evidence-based information</strong><span>Developed from medical literature, guidelines, and peer-reviewed research where appropriate</span></li><li><strong>Reviewed and updated</strong><span>Articles are periodically reviewed as medical knowledge advances</span></li></ul></div></section>
  </>;
}
