# QA Checklist

Unchecked items have not been verified. Automated checks do not substitute for medical/legal approval.

## Desktop
- [x] Routes checked at 1024, 1280, and 1440px
- [x] Header, grids, article/TOC, form, footer aligned

## Mobile
- [x] Routes checked at 320, 375, and 390px
- [x] Menu keyboard/focus behavior and touch targets verified
- [x] No horizontal overflow, overlap, or cut-off text observed

## Tablet
- [x] 768px layout, menu breakpoint, cards, and article checked

## Accessibility
- [x] Keyboard/component interaction pass
- [x] Visible focus and contrast token review
- [x] Semantic headings/landmarks
- [x] Form/disclosure announcements covered by implementation/tests
- [ ] 200%/400% zoom and manual screen-reader matrix
- [x] Reduced-motion behavior inspected

## SEO
- [x] Unique metadata and one H1 per page
- [x] Canonicals, Open Graph, sitemap, robots inspected locally
- [x] Article/breadcrumb/eligible FAQ schema parsed from production HTML

## Content
- [x] Source structure and exact credentials checked during import
- [x] No fabricated dates, statistics, references, or affiliations
- [x] Both imported records validate as complete

## Medical Warnings
- [x] Source urgent advice preserved and prominent
- [x] Disclaimers consistent and not obstructive

## Forms
- [x] Client/server required, syntax, length, spam, rate, loading, success, error states implemented/tested
- [x] No upload or sensitive medical-information request

## Search
- [x] Case-insensitive title/excerpt/topic/keyword matching
- [x] Query + topic, URL topic, clear/empty state

## Navigation
- [x] Exactly six destinations, active state, brand link, all links valid

## Images
- [x] Supplied logo/original local artwork, alt text, stable dimensions, fallback, no observed layout shift

## Performance
- [x] Production rendering boundaries/build output reviewed
- [ ] Lighthouse run against deployed production
- [x] No unnecessary third-party or client script

## Security and Privacy
- [x] Headers and hostile input tested locally
- [x] Secrets scan and dependency audit completed
- [x] Policy matches actual data flow/vendors

## Deployment
- [x] Clean reproducible local production build
- [ ] Preview and production smoke checks
- [ ] Rollback and ownership recovery confirmed
