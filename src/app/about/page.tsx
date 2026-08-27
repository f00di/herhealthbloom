import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig, withBasePath } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("About", "About Dr. Farkhanda Kashif, FCPS, MRCOG, and the purpose and editorial approach of this educational women's health website.", "/about");

export default function AboutPage() {
  const interests = ["General gynecology", "Pregnancy and obstetrics", "Menstrual disorders", "Fertility", "Contraception", "Menopause", "General women's healthcare", "Breast health"];
  return <div className="page-shell"><header className="page-hero container split-page-hero about-page-hero"><div><p className="eyebrow">About</p><h1>{siteConfig.author.name}, {siteConfig.author.credentials}</h1><p className="hero-support">{siteConfig.author.role}</p><p>{siteConfig.author.name}, {siteConfig.author.credentials}, is a physician specialized in Obstetrics &amp; Gynecology with a strong interest in women&apos;s health education and evidence-based medicine.</p></div><div className="profile-card"><span aria-hidden="true">FK</span><div><p><strong>Professional identity</strong></p><p>{siteConfig.author.name}<br />{siteConfig.author.credentials}<br />{siteConfig.author.role}</p></div></div></header>
    <div className="container about-source-image"><Image src={withBasePath("/images/about/image1.png")} alt="Healthcare professionals in a hospital" width={1536} height={1024} sizes="(max-width: 900px) 100vw, 1180px" /></div>
    <div className="container prose-page">
      <section><p>We created this website with a simple goal: to make reliable medical information easily accessible, understandable, and useful for everyone.</p><p>Many women search the internet when they experience symptoms or receive a new diagnosis. Unfortunately, online information is often incomplete, misleading, or difficult to understand. Through this platform, we aim to bridge that gap by providing clear, accurate, and patient-friendly educational resources based on authentic current medical knowledge.</p></section>
      <section><h2>Areas of Interest</h2><p>The educational content focuses on:</p><ul className="two-column-list">{interests.map((interest) => <li key={interest}>{interest}</li>)}</ul></section>
      <section><h2>The Philosophy</h2><p>We believe that patient education is one of the most important parts of healthcare.</p><p>Understanding your condition helps reduce anxiety, encourages meaningful discussions with your healthcare provider, and supports informed medical decisions.</p></section>
      <section><h2>Editorial Standards</h2><p>Content on this website is developed using current medical literature, established clinical guidelines, and peer-reviewed research whenever appropriate.</p><p>Articles are periodically reviewed and updated to reflect advances in medical knowledge.</p><p>Whenever possible, references are provided so readers can explore the original sources.</p></section>
      <section><h2>Medical Disclaimer</h2><p>The articles published on this website are designed to support health education and improve public understanding of women&apos;s health topics.</p><p>{siteConfig.medicalDisclaimer} Always seek the advice of your healthcare provider with any questions you may have regarding a medical condition, pregnancy, or reproductive health. Never disregard professional medical advice or delay seeking it because of something you have read or seen on this website.</p></section>
      <section><h2>Thank You</h2><p>Thank you for visiting.</p><p>We hope this website helps you better understand women&apos;s health, pregnancy, breast conditions, and reproductive medicine through trustworthy, evidence-based information presented in a clear and compassionate manner. Your health begins with knowledge, and informed decisions lead to better care.</p></section>
    </div>
  </div>;
}
