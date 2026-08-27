import type { Metadata } from "next";
import { FAQAccordion } from "@/components/ui/faq-accordion";
import { JsonLd } from "@/components/seo/json-ld";
import { getAbsoluteUrl, siteConfig } from "@/config/site";
import type { FAQItem } from "@/types/article";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("Frequently Asked Questions", "Answers about the educational purpose, medical limitations, content review, references, privacy, and emergency use of this women's health website.", "/faq");

const faqs: FAQItem[] = [
  { question: "Is this website medical advice?", answer: `${siteConfig.medicalDisclaimer} Always seek the advice of your healthcare provider with any questions you may have regarding a medical condition, pregnancy, or reproductive health. Never disregard professional medical advice or delay seeking it because of something you have read or seen on this website.` },
  { question: "Who manages the information on this website?", answer: `Managed under supervision of qualified ${siteConfig.author.name} (${siteConfig.author.credentials}),` },
  { question: "Can I use this website instead of seeing a doctor?", answer: "The information published on this website is not intended to replace professional medical advice, diagnosis, or treatment. Always seek the advice of a qualified healthcare professional regarding any medical concern or emergency." },
  { question: "How often is information reviewed?", answer: "Articles are periodically reviewed and updated to reflect advances in medical knowledge." },
  { question: "Are references provided?", answer: "Whenever possible, references are provided so readers can explore the original sources." },
  { question: "Can I send medical records through the contact option?", answer: "We do not request or intentionally collect personal medical information. Please do not submit:", items: ["Medical records", "Laboratory reports", "Imaging studies", "Personal health information", "Prescription details"], closing: "If you require medical advice, please consult your own healthcare professional." },
  { question: "What should I do in a medical emergency?", answer: "Always seek the advice of a qualified healthcare professional regarding any medical concern or emergency." }
];

export default function FAQPage() {
  return <div className="page-shell"><header className="page-hero container narrow-page"><p className="eyebrow">FAQ</p><h1>Frequently Asked Questions</h1></header><section className="container faq-page section section-first" aria-label="Website questions"><FAQAccordion items={faqs} headingLevel={2} /><aside className="emergency-strip"><strong>Medical emergency?</strong><span>Always seek the advice of a qualified healthcare professional regarding any medical concern or emergency.</span></aside></section><JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", url: getAbsoluteUrl("/faq"), mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: [item.answer, ...(item.items ?? []), item.closing].filter(Boolean).join(" ") } })) }} /></div>;
}
