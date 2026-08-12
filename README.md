# Her HealthBloom

## Overview

A content-first educational women's health website for Dr. Farkhanda Kashif, FCPS, MRCOG. All six authoritative DOCX files are retained in `source-documents`; approved copy is represented in reusable pages and two complete structured articles. The production domain remains unconfirmed.

Read [Project Summary](PROJECT_SUMMARY.md) for scope and status.

## Technology

Next.js 16 App Router, React 19, strict TypeScript, tokenized CSS, validated structured JSON articles, and Vitest/Testing Library. The entire site is exported as static HTML for GitHub Pages; topic filtering and email-draft preparation run in small client-side islands.

## Getting Started

Requirements: Node.js 20.9+ and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

The deployment workflow obtains the canonical URL and project base path from GitHub Pages. The optional `NEXT_PUBLIC_CONTACT_EMAIL` repository variable enables the page to prepare a `mailto:` draft; it is public and must not be treated as a secret. See [environment variable documentation](docs/ENVIRONMENT_VARIABLES.md).

## Development and Testing

```bash
npm run lint
npm run typecheck
npm test
npm run validate:content
```

## Production Build

```bash
npm run build
```

`npm run build` writes the deployable site to `out/`.

## Deployment

In the repository, select **Settings → Pages → Source → GitHub Actions**, then push to `main` or run the workflow manually. The workflow gates deployment on lint, typecheck, tests, and a static export before publishing `out/`. See [Deployment](docs/DEPLOYMENT.md).

## Content Publishing

Add one validated JSON record under `content/articles` and an approved local image if available; listings, search, static routes, metadata, and eligible sitemap entries update automatically. Follow the [Content Publishing Workflow](docs/CONTENT_PUBLISHING_WORKFLOW.md).

## Repository Documentation

- [Master Plan](docs/MASTER_PLAN.md)
- [Technical Architecture](docs/ARCHITECTURE.md)
- [Content Model](docs/CONTENT_MODEL.md)
- [Implementation Status](docs/IMPLEMENTATION_STATUS.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
