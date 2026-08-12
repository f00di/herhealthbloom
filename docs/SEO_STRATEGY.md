# SEO Strategy

## Objectives and YMYL Guardrails

Make approved educational content discoverable while accurately communicating authorship, limitations, and sources. No fabricated review signals, dates, citations, ratings, affiliations, or ranking promises.

## URL and Canonical Strategy

Stable paths are `/`, `/articles`, `/articles/<slug>`, `/about`, `/faq`, `/contact`, and `/privacy`. Topic filters use a query string but canonicalize to `/articles`; article pages self-canonicalize. `NEXT_PUBLIC_SITE_URL` is the single deployment origin and must be confirmed before launch.

## Metadata and Social Sharing

Root defaults come from site config. Every main page supplies a unique title and description. Article title, description, optional dates, author, and image derive from its record. Open Graph and Twitter metadata mirror real page content and use a local default image when no article image exists.

## Sitemap and Robots

Next.js metadata routes generate both. The sitemap reads every article record automatically and excludes the contact API. Robots permit public pages and disallow `/api/`; the sitemap uses the configured origin.

## Structured Data

- Site/About: conservative `WebSite` and `Person` facts limited to supplied identity/credentials.
- Articles: `Article` with author and known metadata; no unknown dates or false medical review status.
- Breadcrumbs: `BreadcrumbList` matching visible links.
- FAQs: `FAQPage` only where the same imported questions and answers are visible in HTML; the dedicated general FAQ remains ordinary website-policy content without schema inflation.

JSON-LD is generated from controlled data and serialized with `<` escaped. Article content remains ordinary crawlable HTML.

## Internal Linking, Headings, and Images

Exactly one H1 per page; H2/H3 reflect the content hierarchy. Home cards, topic filters, breadcrumbs, related content, and contextual policy links create clear paths. Images use local stable URLs, dimensions/aspect ratios, and meaningful alt; decorative SVGs are ignored by assistive tech.

## Search Intent and Future Content

Titles and excerpts answer clear educational topics without sensational wording. Keyword fields support on-site discovery but are not stuffed into pages. Future content clusters can grow through category configuration and article records; no traffic-volume claim is made.
