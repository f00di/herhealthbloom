# Architecture Decision Log

## ADR-001: Next.js App Router

**Status:** Accepted  
**Context:** The empty repository needs static health pages, dynamic metadata, sitemap/robots, and a framework-supported deployment path.
**Decision:** Use current stable Next.js with React and strict TypeScript.  
**Alternatives:** static HTML (more duplication), a client SPA (weaker default crawlability), a heavier full-stack framework.  
**Consequences:** integrated build/deployment and small client islands; framework upgrades require maintenance.

## ADR-002: Validated structured JSON articles

**Status:** Superseded by ADR-007
**Context:** Articles must be editable separately, safely preserve complex structures imported from the authoritative DOCX files, and migrate to a CMS.  
**Decision:** One JSON file per article with typed blocks and build-time validation.  
**Alternatives:** MDX (executable/compile complexity), hardcoded TSX (bespoke pages), database/CMS (unnecessary).  
**Consequences:** deterministic safe rendering and one-file discovery; authoring is more structured than prose Markdown.

## ADR-003: Client-side local search

**Status:** Accepted  
**Context:** Initial corpus is two records.  
**Decision:** send summaries only and normalize/filter in one client component.  
**Alternatives:** hosted search or database full-text search.  
**Consequences:** instant, private, inexpensive search; payload/index approach should be revisited after measured growth.

## ADR-004: Optional Resend-compatible contact delivery

**Status:** Accepted  
**Context:** A complete server implementation is required, but credentials and recipient are unknown.  
**Decision:** same-origin validated API using direct server-side HTTPS to Resend, disabled transparently without variables.  
**Alternatives:** fake success, mailto only, provider SDK, database.  
**Consequences:** no SDK or persistence; the owner must configure/test delivery, and distributed rate limiting is future work.

## ADR-007: GitHub Pages static export and mailto contact

**Status:** Accepted
**Context:** The requested production target is GitHub Pages, which cannot run the prior POST route or apply Next.js runtime headers. Project-site assets and canonical URLs also require a repository base path.
**Decision:** Export every route statically, use Pages-provided URL/base-path outputs during the build, and replace server delivery with an optional public-address `mailto:` draft that never claims delivery.
**Alternatives:** retain a server-capable host, add an unapproved third-party form processor, or remove contact entirely.
**Consequences:** hosting is simple and has no runtime secrets or stored contact data; reliable in-page delivery and repository-defined response headers are unavailable on this platform.

## ADR-005: Tokenized CSS without UI/animation libraries

**Status:** Accepted  
**Context:** The interface is bespoke, content-first, and motion-light.  
**Decision:** global CSS tokens and accessible native primitives.  
**Alternatives:** Tailwind/shadcn, React Bits, Anime.js, adapted Uiverse components.  
**Consequences:** smallest dependency/bundle footprint and direct design control; components require maintained CSS.

## ADR-006: Original abstract local SVGs

**Status:** Accepted  
**Context:** The DOCX files include a supplied brand logo and generic imagery without documented reuse rights; arbitrary medical imagery cannot be fetched.  
**Decision:** retain the supplied Her HealthBloom logo and use original abstract botanical/health illustrations, never fake clinical photographs.  
**Alternatives:** remote stock imagery, blank cards.  
**Consequences:** recognizable branding plus reliable layouts; all non-logo supplied images remain excluded until ownership/licensing is confirmed.
