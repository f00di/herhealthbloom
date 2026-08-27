import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArticleGrid } from "@/components/article/article-card";
import { HealthTopicCard } from "@/components/home/health-topic-card";
import { ArrowIcon } from "@/components/ui/icons";
import { healthTopics } from "@/config/topics";
import { siteConfig, withBasePath } from "@/config/site";
import { getAllArticles, toArticleSummary } from "@/lib/articles";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("Trusted Women's Health Information, Explained Clearly", "Evidence-Based information and Education in Gynecology, Pregnancy, and Breast Health", "/");

export default async function HomePage() {
  const articles = (await getAllArticles()).slice(0, 8).map(toArticleSummary);
  return <>
    <section className="hero"><div className="container hero-grid"><div className="hero-copy">
      <h1>Trusted Women’s Health Information, Explained Clearly</h1>
      <p className="hero-support">Evidence-Based information and Education in Gynecology, Pregnancy, and Breast Health</p>
      <p>Welcome to the educational informative website of {siteConfig.author.name} ({siteConfig.author.credentials}), an {siteConfig.author.role} dedicated to providing accurate, evidence-based information on women’s health. Our mission is to help women better understand their health through clear and reliable medical resources.</p>
      <div className="button-row"><Link className="button button-primary" href="/articles">Explore Articles <ArrowIcon /></Link><Link className="button button-secondary" href="#health-topics">Browse Health Topics</Link></div>
    </div><div className="hero-art"><Image src={withBasePath("/images/home/image1.png")} width={1536} height={1024} alt="Women receiving gynecology and pregnancy information from healthcare professionals" priority sizes="(max-width: 900px) 92vw, 560px" /></div></div></section>

    <section className="section" aria-labelledby="latest-heading"><div className="container"><div className="section-heading"><div><h2 id="latest-heading">Latest Articles</h2></div><Link className="text-link desktop-only-link" href="/articles">View all articles <ArrowIcon /></Link></div><ArticleGrid articles={articles} /></div></section>

    <section className="section topic-section" id="health-topics" aria-labelledby="topics-heading"><div className="container"><div className="section-heading narrow"><div><h2 id="topics-heading">Health Topics</h2></div></div><div className="topic-grid">{healthTopics.map((topic) => <HealthTopicCard topic={topic} key={topic.slug} />)}</div></div></section>

    <section className="section trust-section" aria-labelledby="trust-heading"><div className="container home-information"><p>Whether you’re looking for information about menstrual health, pregnancy, fertility, breast conditions, menopause, contraception, or common gynecological concerns, you’ll find medically reviewed blogs and articles designed to support informed conversations with your family, friends and healthcare provider.</p><h2>Explore Trusted Women’s Health Topics</h2><ul><li><strong>Gynecology:</strong> Menstrual disorders, Menopause, Fibroids, Endometriosis, Ovarian cysts, Pelvic pain, Vaginal infections, Polyendocrine Metabolic Ovarian Syndrome (PMOS) (earlier known as PCOS) and more.</li><li><strong>Pregnancy &amp; Obstetrics:</strong> Early pregnancy issues, Morning sickness, Antenatal care, Pregnancy complications, Labor, Delivery, Postpartum recovery, and Breastfeeding.</li><li><strong>Breast Health:</strong> Breast pain, Breast lumps, , Breast cysts, Nipple discharge, Breast infections, and Breast cancer awareness.</li><li><strong>Contraception &amp; Fertility:</strong> Birth control options, Emergency contraception, Fertility, Ovulation, Infertility, and Reproductive planning.</li><li><strong>Women’s Wellness:</strong> Cervical screening, HPV vaccination, Urinary incontinence, Healthy lifestyle, and preventive care.</li></ul><h2 id="trust-heading">Why Trust This Website?</h2><ul className="trust-list"><li>Managed under supervision of qualified {siteConfig.author.name} ({siteConfig.author.credentials}),</li><li>Evidence-based medical information</li><li>Clear, patient-friendly language</li><li>Regularly reviewed and updated</li><li>Educational medical illustrations to simplify complex topics</li></ul><Link className="text-link" href="/about">About <ArrowIcon /></Link></div></section>
  </>;
}
