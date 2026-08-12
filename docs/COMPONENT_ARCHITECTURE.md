# Component Architecture

| Component | Responsibility | Boundary | Principal props / reuse |
|---|---|---|---|
| `SiteHeader` | brand, skip-adjacent landmark, desktop/mobile navigation | Server shell | current path handled by link-aware client navigation |
| `DesktopNavigation` | six visible primary links and active state | Client (pathname) | navigation config |
| `MobileNavigation` | keyboard-operable menu, focus/escape/route close | Client | navigation config |
| `SiteFooter` | concise purpose, navigation, topics, disclaimer | Server | site/topic config |
| `Hero` | homepage H1, supporting copy and restrained CTAs | Server | copy and links |
| `ArticleCard` / `ArticleGrid` | reusable search/home previews and image fallback | Server-compatible | article summary |
| `HealthTopicCard` | icon, title, description, filtered link | Server | topic config |
| `SearchBox` / `TopicFilter` | accessible combined discovery | Client | generated search summaries |
| `Breadcrumbs` | visible hierarchy and semantic links | Server | breadcrumb items |
| `ArticleHeader` / `ArticleMeta` | title, category, credentials, known dates/status | Server | article |
| `ArticleBody` | safe structured block renderer | Server | validated blocks |
| `TableOfContents` | desktop sticky links and mobile disclosure | Server + native details | heading projection |
| `MedicalCallout` | emphasized supporting medical information | Server | title/body/tone |
| `EmergencyWarning` | prominent urgent-care advice | Server | approved text only |
| `FAQAccordion` | keyboard-accessible article/site questions | Native details | FAQ items |
| `ReferencesSection` | crawlable citations and wrapping links | Server | references |
| `RelatedArticles` | internal links from valid related slugs | Server | article summaries |
| `AuthorBox` | exact supplied author name/credentials | Server | centralized author data |
| `MedicalDisclaimer` | consistent educational limitation | Server | compact/full variant |
| `ContactForm` | validation, submission, live states | Client | endpoint only |

Generic presentational elements stay server-renderable. Client boundaries are limited to pathname state, menu focus, search state, and form state.
