# Content Publishing Workflow

Only medically approved content should move to `complete`.

1. Create `content/articles/<slug>.json` by copying the documented example/schema.
2. Use a stable lowercase hyphenated slug and fill unique title/meta/excerpt data.
3. Select a configured category and add useful on-site keywords.
4. Add structured body blocks in source order; map urgent advice to `emergency-warning`.
5. Add approved FAQs and references without fabricating or “improving” clinical claims.
6. Add a licensed local image under `public/images/articles`, with dimensions and descriptive alt, or omit it for the designed fallback.
7. Record real publication/update dates only when known and set `contentStatus` accurately.
8. Run `npm run validate:content`, `npm run lint`, `npm run typecheck`, `npm test`, and `npm run build`.
9. Preview headings, table of contents, warnings, tables, references, long URLs, mobile layout, metadata, and related links.
10. Commit/push after medical approval; Vercel builds automatically. Verify the production URL and sitemap.

## Example Record

JSON has no frontmatter; this complete example shows the equivalent metadata boundary:

```json
{
  "slug": "reviewed-article-slug",
  "title": "Medically reviewed article title",
  "metaTitle": "Unique search title",
  "metaDescription": "Accurate description within the project's editorial standard.",
  "excerpt": "Short accurate listing summary.",
  "author": "Dr. Farkhanda Kashif",
  "authorCredentials": "FCPS, MRCOG",
  "category": "pregnancy",
  "keywords": ["approved phrase"],
  "featuredImage": {
    "src": "/images/articles/example.svg",
    "alt": "Descriptive non-decorative alternative text",
    "width": 1200,
    "height": 675
  },
  "publishedAt": "2026-08-10",
  "contentStatus": "complete",
  "body": [
    { "type": "heading", "level": 2, "id": "overview", "text": "Overview" },
    { "type": "paragraph", "text": "Approved source-derived content." }
  ],
  "faq": [{ "question": "Approved question?", "answer": "Approved answer." }],
  "references": [{ "label": "Verified source title", "url": "https://example.org/source" }],
  "relatedArticles": []
}
```

The source document/version, medical reviewer approval, and image rights evidence should accompany the pull request; they are governance records, not invented public metadata.
