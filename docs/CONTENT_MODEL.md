# Content Model

## Article Record

```ts
type Article = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  author: string;
  authorCredentials: string;
  category: TopicSlug;
  keywords: string[];
  featuredImage?: { src: string; alt: string; width: number; height: number };
  publishedAt?: string;
  updatedAt?: string;
  contentStatus: "complete" | "source-missing" | "medical-review-required";
  body: ContentBlock[];
  faq: FAQItem[];
  references: Reference[];
  relatedArticles: string[];
};
```

Blocks support headings with stable IDs, paragraphs, lists, tables, `MedicalCallout`, and `EmergencyWarning`. Content is rendered as React elements; untrusted HTML is never accepted.

## Requirements and Validation

Slug, title, both metadata fields, excerpt, author, credentials, known category, keywords, content status, and arrays are required. Dates are optional ISO dates and omitted when unknown. Slugs must be lowercase hyphenated and globally unique. Heading IDs must be unique within an article. Image paths must be local and include descriptive alt text/dimensions. References require a label and may include a safe `https` URL; no citation is fabricated.

## FAQs and References

FAQs are `{ question, answer, items?, closing? }`; optional list items and closing text preserve source structures while rendering as semantic disclosure content. References are `{ label, url?, note? }`; long URLs wrap. Schema combines the same visible FAQ parts into its answer text. Emergency information is a typed block so styling cannot be lost during ordinary prose formatting.

## Categories

Records reference centralized topic slugs in `src/config/topics.ts`. Unknown categories fail validation. Adding a category requires one config entry; listing and filtering derive automatically.

## Adding an Article

Create one JSON file in `content/articles`, add a licensed local image if available, include reviewed metadata/body/FAQs/references, then run validation/tests/build. The filesystem adapter discovers it automatically. See [CONTENT_PUBLISHING_WORKFLOW.md](CONTENT_PUBLISHING_WORKFLOW.md).

## Future CMS Migration

The validated `Article` shape is the boundary. A CMS adapter maps remote fields into this type; route and component APIs remain unchanged.
