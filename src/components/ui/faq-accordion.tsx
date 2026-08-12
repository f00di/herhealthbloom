import type { FAQItem } from "@/types/article";

export function FAQAccordion({ items, headingLevel = 3 }: { items: readonly FAQItem[]; headingLevel?: 2 | 3 }) {
  return <div className="faq-list">{items.map((item) => (
    <details className="faq-item" key={item.question}>
      <summary><span className="faq-question" role="heading" aria-level={headingLevel}>{item.question}</span><span aria-hidden="true" /></summary>
      <div className="faq-answer"><p>{item.answer}</p>{item.items?.length ? <ul>{item.items.map((entry) => <li key={entry}>{entry}</li>)}</ul> : null}{item.closing ? <p>{item.closing}</p> : null}</div>
    </details>
  ))}</div>;
}
