import type { Metadata } from "next";
import { MedicalDisclaimer } from "@/components/article/article-sections";
import { siteConfig } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("About", "About Dr. Farkhanda Kashif, FCPS, MRCOG, and the purpose and editorial approach of this educational women's health website.", "/about");

export default function AboutPage() {
  const interests = ["General gynecology", "Pregnancy and obstetrics", "Menstrual disorders", "Fertility", "Contraception", "Menopause", "General women's healthcare", "Breast health"];
  return <div className="page-shell"><header className="page-hero container split-page-hero"><div><p className="eyebrow">About</p><h1>{siteConfig.author.name}, {siteConfig.author.credentials}</h1><p className="hero-support">{siteConfig.author.role}</p><p>{siteConfig.author.name}, {siteConfig.author.credentials}, is a physician specialized in Obstetrics &amp; Gynecology with a strong interest in women’s health education and evidence-based medicine.</p></div><div className="profile-card"><span aria-hidden="true">DK</span><p><strong>Professional identity</strong></p><p>{siteConfig.author.name}<br />{siteConfig.author.credentials}<br />{siteConfig.author.role}</p></div></header>
    <div className="container prose-page">
      <section><h2>Purpose of this website</h2><p>This website was created with a simple goal: to make reliable medical information easily accessible, understandable, and useful for everyone.</p><p>Many women search the internet when they experience symptoms or receive a new diagnosis. Unfortunately, online information is often incomplete, misleading, or difficult to understand. Through this platform, the aim is to bridge that gap by providing clear, accurate, and patient-friendly educational resources based on authentic current medical knowledge.</p></section>
      <section><h2>Areas of interest</h2><ul className="two-column-list">{interests.map((interest) => <li key={interest}>{interest}</li>)}</ul></section>
      <section><h2>The philosophy</h2><p>Patient education is one of the most important parts of healthcare. Understanding your condition helps reduce anxiety, encourages meaningful discussions with your healthcare provider, and supports informed medical decisions.</p></section>
      <section><h2>Editorial standards</h2><p>Content on this website is developed using current medical literature, established clinical guidelines, and peer-reviewed research whenever appropriate.</p><p>Articles are periodically reviewed and updated to reflect advances in medical knowledge. Whenever possible, references are provided so readers can explore the original sources.</p></section>
      <section><h2>Thank you</h2><p>Thank you for visiting. We hope this website helps you better understand women’s health, pregnancy, breast conditions, and reproductive medicine through trustworthy, evidence-based information presented in a clear and compassionate manner. Your health begins with knowledge, and informed decisions lead to better care.</p></section>
      <MedicalDisclaimer />
    </div>
  </div>;
}
