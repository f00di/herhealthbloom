# Her HealthBloom

Women's health education site for Dr. Farkhanda Kashif (FCPS, MRCOG). Next.js 16 static export for GitHub Pages; articles are validated JSON in `content/articles`.

- Scope and status: `PROJECT_SUMMARY.md`, `docs/IMPLEMENTATION_STATUS.md`. Find the right doc via `docs/REPOSITORY_MAP.md` (don't read all of `docs/`).
- Design tokens: `docs/DESIGN_SYSTEM.md` ("Calm editorial" preset).
- Commands: `npm run dev`, `npm run lint`, `npm run typecheck`, `npm test`, `npm run validate:content`, `npm run build` (writes `out/`).
- Source articles: `source-documents/*.docx` are the authority for medical wording.

## Rules
- Informational only. No diagnosis, treatment or telemedicine claims. Follow `docs/MEDICAL_CONTENT_GOVERNANCE.md`.
- Never change medical meaning when editing copy; flag it to the user instead.
- Production domain is unconfirmed. Don't hardcode one.
