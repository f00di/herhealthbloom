import type { Metadata } from "next";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { JsonLd } from "@/components/seo/json-ld";
import { getAbsoluteUrl, siteConfig } from "@/config/site";
import type { FAQItem } from "@/types/article";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("Frequently Asked Questions", "Answers about the educational purpose, medical limitations, content review, references, privacy, and emergency use of this women's health website.", "/faq");

const faqs: FAQItem[] = [
  { question: "Is this website medical advice?", answer: "No. It provides general educational and informational women's health content and is not a substitute for professional medical advice, diagnosis, or treatment." },
  { question: "Who manages the information on this website?", answer: `The website is managed under the supervision of ${siteConfig.author.name}, ${siteConfig.author.credentials}, ${siteConfig.author.role}. A page does not claim medical review, sources, or an update date unless that information is actually available.` },
  { question: "Can I use this website instead of seeing a doctor?", answer: "No. A website cannot assess your individual history, examination, test results, or circumstances. Consult an appropriate healthcare professional about personal medical questions." },
  { question: "How often is information reviewed?", answer: "The content system supports documented updates and periodic review, but a review interval has not yet been confirmed by the site owner or medical editor. Known dates are shown only when supplied." },
  { question: "Are references provided?", answer: "Articles are designed to display their supplied references in a readable section. If an authoritative source or reference list is missing, the page says so instead of fabricating citations." },
  { question: "Can I send medical records through the contact option?", answer: "No. Do not submit medical records, laboratory reports, imaging studies, personal health information, prescription details, or other sensitive health information. The website has no file upload." },
  { question: "What should I do in a medical emergency?", answer: "Do not use this website or its contact option for emergencies. If you believe you are experiencing a medical emergency, contact an appropriate emergency healthcare service immediately." }
];

export default function FAQPage() {
  return <div className="page-shell"><header className="page-hero container narrow-page"><p className="eyebrow">FAQ</p><h1>Frequently asked questions</h1><p>General answers about how to use this educational website safely and what the website can—and cannot—provide.</p></header><section className="container faq-page section section-first" aria-label="Website questions"><FAQAccordion items={faqs} headingLevel={2} /><aside className="emergency-strip"><strong>Medical emergency?</strong><span>Do not wait for a website response. Contact an appropriate emergency healthcare service.</span></aside></section><JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", url: getAbsoluteUrl("/faq"), mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) }} /></div>;
}
