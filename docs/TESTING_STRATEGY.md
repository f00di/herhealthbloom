# Testing Strategy

## Test Levels

- TypeScript: strict project validation (`npm run typecheck`).
- Lint: Next/ESLint static checks (`npm run lint`).
- Unit: content validation, search normalization/filtering, and contact field validation.
- Component: search/filter UI, FAQ native disclosures, contact mailto/unavailable behavior, and mobile navigation behavior where practical.
- Integration/repository smoke: required routes/files, article discovery, slugs, navigation count, metadata endpoints, and 404 presence.
- Build: `npm run build` validates the complete static export, metadata, imports, and route compilation; release checks also simulate the Pages project base path.
- Accessibility: semantic/component assertions plus manual keyboard, contrast, zoom, and screen-reader checklist.
- Responsive/visual: production pages at 320, 375, 390, 768, 1024, 1280, and 1440px.
- End-to-end: defer a heavyweight browser dependency unless static smoke/component coverage proves insufficient; the live Pages artifact still needs a deployed smoke check.

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
