# Dependencies

Direct versions are locked in `package-lock.json`.

| Dependency | Purpose | Client-side? | Required? |
|---|---|---:|---:|
| `next` 16.3.0 | App Router, static rendering/export, metadata, and image components | Partly | Yes |
| `react`, `react-dom` 19.2.8 | UI rendering | Partly | Yes |
| `typescript` 6.0.3 | strict static type checking | No | Development |
| `eslint` 9.39.5 + `eslint-config-next` 16.3.0 | source linting | No | Development |
| `vitest` 4.1.10 | unit/component/content test runner | No | Development |
| Testing Library, user-event, jest-dom, `jsdom` | accessible interaction tests | No | Development |

## Explicit Evaluations

- **shadcn/ui:** not installed. There is no existing Tailwind/Radix system; native navigation, forms, and disclosure primitives cover the requirement with less code/dependency surface.
- **React Bits:** not installed. Decorative effects do not materially improve a medical reading site.
- **Anime.js:** not installed. Required motion is achievable with subtle CSS and reduced-motion support.
- **Uiverse:** not a package and no pattern is copied. Bespoke tokens keep controls consistent and maintainable.
- **Email/form SDK:** not installed. Static contact preparation uses the visitor's email application and no delivery service.
- **MDX/parser/sanitizer:** not installed. Typed JSON blocks avoid executable/untrusted HTML.
