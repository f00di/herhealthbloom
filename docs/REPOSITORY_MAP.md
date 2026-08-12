# Repository Map

This map reflects the implemented repository.

```text
/
├── content/articles/       one validated structured file per article
├── docs/                   architecture, governance, QA, and operations
├── public/images/          owned local visual assets
├── source-documents/       six authoritative DOCX source files
├── src/
│   ├── app/                routes, metadata routes, API, error boundaries
│   ├── components/         article, form, layout, search, and UI components
│   ├── config/             site and topic source of truth
│   ├── lib/                loaders, validators, search, metadata/schema helpers
│   ├── styles/             global tokens and page/component styles
│   └── types/              article/content contracts
├── tests/                  automated unit/component/smoke coverage
├── PROJECT_SUMMARY.md      product source of truth
├── README.md               concise developer entry point
├── package.json            scripts, runtime contract, direct dependencies
├── package-lock.json       reproducible npm dependency graph
├── next.config.ts          framework and security-header configuration
├── vitest.config.ts        automated-test configuration
└── .env.example            variable names only; no credentials
```

Generated output (`.next`, coverage) and local environment files are ignored. Content never lives inside bespoke route components.
