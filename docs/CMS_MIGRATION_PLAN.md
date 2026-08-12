# CMS Migration Plan

No CMS is installed in the current scope. The application reads normalized `Article` objects through a small content adapter, so storage can change without rewriting pages.

## Options

- **Git-based CMS:** preserve JSON/asset pull requests and add an editorial UI. Best when review through Git is acceptable.
- **Headless CMS:** model structured blocks, FAQs, references, topics, assets, and editorial status; replace filesystem reads with a server SDK/API plus preview and webhook revalidation.
- **Database-backed CMS:** appropriate only if custom workflow/query requirements justify operations, backups, permissions, and an admin application.

## Migration Steps

1. Confirm editorial roles, preview, audit trail, localization, and review-date requirements.
2. Reproduce the current schema and content-status workflow.
3. Build a CMS-to-`Article` mapping adapter with the same validation.
4. Import records/assets while retaining stable slugs and source evidence.
5. Add draft preview authorization and webhook-triggered revalidation.
6. Compare generated HTML, metadata, schema, sitemap, warnings, FAQs, and references.
7. Redirect only if a slug must change, then retire filesystem reads.

The frontend must never consume unvalidated rich HTML. Prefer portable structured blocks or sanitize server-side with an explicit allow-list.
