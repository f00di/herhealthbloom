# Master Project Plan

This roadmap is governed by [PROJECT_SUMMARY.md](../PROJECT_SUMMARY.md). Checkmarks describe repository work only; external launch gates remain in [LAUNCH_CHECKLIST.md](LAUNCH_CHECKLIST.md).

## Phase 0 — Discovery

**Objective:** establish facts before design or code.  
**Tasks:** [x] inspect Git tree/history; [x] inspect framework/dependencies; [x] locate six DOCX files; [x] inventory assets and deployment configuration.  
**Dependencies:** repository access.  
**Completion criteria:** findings recorded in content inventory and risks.  
**Known risk:** the repository began without an application; the six DOCX files arrived during implementation and were re-audited before import.

## Phase 1 — Architecture

**Objective:** choose the smallest production-grade system.  
**Tasks:** [x] select Next.js App Router and TypeScript; [x] define file-backed structured content, routing, configuration, tokens, images, metadata, and contact boundaries.  
**Dependencies:** discovery.  
**Completion criteria:** quality gate in `ARCHITECTURE.md` passes.  
**Known risk:** framework and dependency updates require periodic review.

## Phase 2 — Foundation

**Objective:** create the shared application shell.  
**Tasks:** [x] layout; [x] typography/theme; [x] header and accessible mobile navigation; [x] footer; [x] site configuration; [x] article data layer.  
**Dependencies:** Phase 1.  
**Completion criteria:** shared shell renders at all routes.  
**Known risk:** the brand is confirmed by the supplied logo, but the domain remains centralized and unconfirmed.

## Phase 3 — Main Pages

**Objective:** implement the six primary destinations.  
**Tasks:** [x] Home; [x] Articles; [x] About; [x] FAQ; [x] Contact; [x] Privacy/Disclaimer.  
**Dependencies:** foundation and approved content inventory.  
**Completion criteria:** semantic, responsive pages with unique metadata.  
**Known risk:** owner/legal sign-off is still required for the imported policy before launch.

## Phase 4 — Article System

**Objective:** provide one reusable reading experience.  
**Tasks:** [x] template; [x] metadata; [x] table of contents; [x] FAQ; [x] references; [x] related articles; [x] callouts; [x] images; [x] schema.  
**Dependencies:** content model.  
**Completion criteria:** any validated content record renders without a bespoke route.  
**Known risk:** source bodies are complete, but final authorized medical sign-off is not recorded.

## Phase 5 — Search

**Objective:** fast discovery for the initial corpus.  
**Tasks:** [x] generated index; [x] case-insensitive query; [x] topic filtering; [x] URL topic initialization; [x] empty/reset state.  
**Dependencies:** article records and client boundary.  
**Completion criteria:** title, excerpt, category, and keywords are searchable.  
**Known risk:** client-side indexing should be revisited only at much larger scale.

## Phase 6 — SEO

**Objective:** crawlable, accurate, non-inflated health content.  
**Tasks:** [x] page/article metadata; [x] sitemap; [x] robots; [x] canonicals; [x] Open Graph; [x] breadcrumbs; [x] supported structured data; [x] internal links.  
**Dependencies:** routes and centralized URL configuration.  
**Completion criteria:** metadata derives from actual content and no unsupported review claims exist.  
**Known risk:** canonical host remains provisional until owner confirmation.

## Phase 7 — Accessibility

**Objective:** WCAG 2.2 AA-quality implementation.  
**Tasks:** [x] semantics; [x] keyboard paths; [x] focus; [x] contrast; [x] forms; [x] disclosures; [x] reduced motion; [x] viewport QA.  
**Dependencies:** implemented UI.  
**Completion criteria:** checklist and automated tests pass; manual assistive-technology review remains a launch gate.  
**Known risk:** browser/screen-reader combinations require post-deployment validation.

## Phase 8 — Security

**Objective:** minimize the public site/contact attack surface.  
**Tasks:** [x] validation; [x] honeypot/timing controls; [x] rate-limit architecture; [x] safe errors; [x] headers; [x] secret boundaries; [x] audit.  
**Dependencies:** contact endpoint.  
**Completion criteria:** hostile input is rejected and no secret reaches client code.  
**Known risk:** in-memory rate limits are best effort on serverless infrastructure.

## Phase 9 — Performance

**Objective:** low JavaScript and stable rendering.  
**Tasks:** [x] static-first rendering; [x] system font fallback; [x] optimized/dimensioned images; [x] narrow client islands; [x] no third-party browser scripts.  
**Dependencies:** UI.  
**Completion criteria:** production build succeeds and bundle/rendering review finds no avoidable client code.  
**Known risk:** Lighthouse needs a deployed or production-served target.

## Phase 10 — Testing

**Objective:** verify core paths and build health.  
**Tasks:** [x] typecheck; [x] lint; [x] unit/component tests; [x] route smoke tests; [x] production build; [x] responsive visual checks.  
**Dependencies:** implementation.  
**Completion criteria:** commands and exact outcomes recorded.  
**Known risk:** full browser E2E coverage may be disproportionate to this static launch.

## Phase 11 — Deployment

**Objective:** reproducible GitHub-to-Vercel delivery.  
**Tasks:** [x] environment template; [x] build configuration; [x] deployment guide; [x] headers; [x] smoke-test plan; [x] rollback plan.  
**Dependencies:** passing checks and owner configuration.  
**Completion criteria:** repository is deployable; live launch gates may remain unchecked.  
**Known risk:** domain, sender, recipient, and provider credentials are unconfirmed.

## Phase 12 — Post-launch Maintenance

**Objective:** protect medical accuracy and application health.  
**Tasks:** [x] document dependency, content, link, accessibility, SEO, log, backup, and rollback routines.  
**Dependencies:** ownership assignments.  
**Completion criteria:** maintenance guide exists and review cadence is owner-confirmed.  
**Known risk:** no approved medical-review interval exists.
