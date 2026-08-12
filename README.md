# Her HealthBloom

## Overview

A content-first educational women's health website for Dr. Farkhanda Kashif, FCPS, MRCOG. All six authoritative DOCX files are retained in `source-documents`; approved copy is represented in reusable pages and two complete structured articles. The production domain remains unconfirmed.

Read [Project Summary](PROJECT_SUMMARY.md) for scope and status.

## Technology

Next.js 16 App Router, React 19, strict TypeScript, tokenized CSS, validated structured JSON articles, and Vitest/Testing Library. Public content is statically generated where possible; the query-aware article index and optional contact endpoint render dynamically.

## Getting Started

Requirements: Node.js 20.9+ and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

`NEXT_PUBLIC_SITE_URL` sets the canonical origin. `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL` enable live contact delivery and must remain server-only. The form returns an honest unavailable response when they are absent. See [environment variable documentation](docs/ENVIRONMENT_VARIABLES.md).

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
npm start
```

## Deployment

Connect the GitHub repository to Vercel, add approved environment values, deploy a preview, then complete the medical/legal/content, domain, email, accessibility, responsive, and SEO launch checks. See [Deployment](docs/DEPLOYMENT.md).

## Content Publishing

Add one validated JSON record under `content/articles` and an approved local image if available; listings, search, static routes, metadata, and eligible sitemap entries update automatically. Follow the [Content Publishing Workflow](docs/CONTENT_PUBLISHING_WORKFLOW.md).

## Repository Documentation

- [Master Plan](docs/MASTER_PLAN.md)
- [Technical Architecture](docs/ARCHITECTURE.md)
- [Content Model](docs/CONTENT_MODEL.md)
- [Implementation Status](docs/IMPLEMENTATION_STATUS.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
