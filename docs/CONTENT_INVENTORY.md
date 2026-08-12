# Content Inventory

The initial empty repository did not contain the source documents. During implementation, all six authoritative DOCX files became available under `source-documents/` and were inspected in full. Approved content was mapped into the application; source files remain available for editorial audit.

| Content | Expected source | Status | Website destination |
|---|---|---|---|
| Homepage | `Home page website.docx` | **READY** — hero, introduction, topics, and trust concepts imported | `/` |
| About | `About page Dr farkhan page website.docx` | **READY** — introduction, purpose, interests, philosophy, standards, disclaimer, and closing imported | `/about` |
| Website/button instructions | `1 instruction website buttons and other.docx` | **READY** — navigation, page, topic, search, and responsive requirements implemented | global UI |
| Privacy and disclaimer | `Privacy Policy WEBSITE page.docx` | **READY / OWNER-LEGAL REVIEW REQUIRED BEFORE LAUNCH** — source meaning preserved and conditional features aligned to actual implementation | `/privacy` |
| Abdominal pain article | `blog 1 abd pain preg.docx` | **READY / MEDICAL SIGN-OFF REQUIRED BEFORE LAUNCH** — complete body, urgent warnings, 7 FAQs, and 13 references imported | `/articles/abdominal-pain-during-pregnancy` |
| Healthy eating article | `blog 2 food Health Eat Preg.docx` | **READY / MEDICAL SIGN-OFF REQUIRED BEFORE LAUNCH** — complete body, 6 FAQs, and 8 references imported | `/articles/healthy-eating-during-pregnancy` |

## Imported Source Content

- Homepage headline: “Trusted Women's Health Information, Explained Clearly”
- Supporting message: “Evidence-Based Information and Education in Gynecology, Pregnancy, and Breast Health”
- Author identity: Dr. Farkhanda Kashif, FCPS, MRCOG; Obstetrician and Gynecologist
- Educational-purpose and non-substitution statements
- Six navigation destinations and six topic labels
- Article titles, article 1 meta title/description, clinical bodies, article FAQs, and references
- General site FAQ themes and privacy/contact prohibitions
- Copyright line and August 2026 privacy update label

## Intentionally Not Invented

Publication/update dates, external affiliations, clinic details, contact email, testimonials, and a production domain remain absent. Article 2 had no explicit SEO metadata, so concise metadata was created from its supplied subject matter without adding a new medical claim. The generic supplied clinical/photo imagery was not reused because ownership/licensing was not established; the supplied Her HealthBloom logo was retained and original non-clinical illustrations were created for layout support.

## Import Mapping

DOCX headings map to content heading blocks; paragraphs/lists preserve order and meaning; urgent language maps to `emergency-warning`; supporting cautions map to `medical-callout`; FAQs and references map to dedicated arrays. Source tracking parameters were removed from two reference URLs without changing the cited destination. Any perceived clinical correction remains a medical-review item rather than an automatic edit.
