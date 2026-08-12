# Design System

## Principles

Professional, calm, clean, readable, medically credible, welcoming, and uncluttered. Whitespace and hierarchy take priority over decoration; rose is restrained and balanced by sage/teal.

## Color Tokens

| Token | Value | Use |
|---|---|---|
| `--color-canvas` | `#fbfaf7` | warm page background |
| `--color-surface` | `#ffffff` | cards and reading surfaces |
| `--color-text` | `#242b2b` | primary copy |
| `--color-muted` | `#596564` | secondary copy |
| `--color-primary` | `#8a4f5d` | primary links/actions |
| `--color-primary-dark` | `#693944` | hover/strong emphasis |
| `--color-rose-soft` | `#f5e9eb` | restrained accent surface |
| `--color-sage` | `#426d67` | secondary accent |
| `--color-sage-soft` | `#e6efec` | topic/support surface |
| `--color-border` | `#d9dfdc` | boundaries |
| `--color-warning` | `#8c2f32` | urgent text |
| `--color-warning-bg` | `#fff0ef` | urgent surface |
| `--color-focus` | `#155e75` | focus ring |

Contrast is verified in implementation; color is paired with labels/icons and never the sole signal.

## Typography

System-first serif display stack for calm editorial headings and system sans-serif for body/UI to avoid font downloads. Body uses approximately 16–18px, article copy 18px with 1.75 line-height, and fluid headings via `clamp()`.

## Spacing and Containers

An 8px-derived scale drives gaps. General content maxes at 1180px; article text at 760px; article-plus-TOC wrapper at 1120px. Side padding begins at 20px and grows at wider breakpoints.

## Shape and Elevation

Radii: 8px controls, 14px cards, 20–28px feature surfaces. Shadows are soft and rare. One-pixel borders preserve definition without dashboard-like elevation.

## Components

Cards use consistent border/surface/padding and a modest hover lift only for links. Buttons have at least 44px height, visible focus, primary/secondary/text variants. Inputs use persistent labels, generous padding, error text, and `aria-invalid`. Article warnings use an icon, heading, border, and accessible red; normal callouts use sage/neutral tones.

## Iconography

Small inline SVG line icons use `currentColor`; decorative icons are `aria-hidden`. No childish or faux-clinical imagery.

## Responsive Breakpoints

Layouts are mobile-first and tested at 320, 375, 390, 768, 1024, 1280, and 1440px. CSS layout shifts at content-driven breakpoints near 640, 768, and 1024px. Long words and URLs use safe wrapping.

## Motion

Only brief CSS opacity/transform/color transitions are used. `prefers-reduced-motion: reduce` removes nonessential transitions and smooth scrolling. No animation dependency is installed.
