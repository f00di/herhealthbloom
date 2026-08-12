# Testing Strategy

## Test Levels

- TypeScript: strict project validation (`npm run typecheck`).
- Lint: Next/ESLint static checks (`npm run lint`).
- Unit/API: content validation, search normalization/filtering, contact validation/rate behavior, malformed/oversized request handling, and disabled-delivery behavior.
- Component: search/filter UI, FAQ native disclosures, contact client validation, and mobile navigation behavior where practical.
- Integration/repository smoke: required routes/files, article discovery, slugs, navigation count, metadata endpoints, and 404 presence.
- Build: `npm run build` validates static generation, metadata, imports, and route compilation.
- Accessibility: semantic/component assertions plus manual keyboard, contrast, zoom, and screen-reader checklist.
- Responsive/visual: production pages at 320, 375, 390, 768, 1024, 1280, and 1440px.
- End-to-end: defer a heavyweight browser dependency unless static smoke/component coverage proves insufficient; live email delivery always needs a deployed manual check.

## Critical Workflows

Home and all six navigation routes load; mobile navigation opens/closes; article index and both requested slugs load; query/category filters compose and reset; FAQ disclosure works; contact required/email/length errors work; the custom 404 renders.

## Commands

```bash
npm install
npm run lint
npm run typecheck
npm test
npm run build
```

Exact final results are recorded in `IMPLEMENTATION_STATUS.md` and the completion report, not predicted here.
