# Performance

## Strategy

- Statically export every route; no runtime endpoint or server-rendered request exists.
- Limit client JavaScript to header state, article search, and contact form. Native disclosure elements avoid accordion libraries.
- Use system font stacks, eliminating font network requests and layout shifts.
- Serve owned local SVGs with fixed aspect ratios. Future raster images use `next/image`, explicit dimensions, modern formats, and lazy loading below the fold.
- Add no analytics, embeds, autoplay media, animation package, CMS SDK, or third-party browser script.
- Let GitHub Pages cache fingerprinted Next.js assets; the site serves no private/user-specific responses.

## Core Web Vitals Considerations

The hero contains text and a lightweight local illustration, keeping LCP deterministic. Media dimensions prevent CLS. Static HTML and small event handlers reduce INP risk. CSS is responsive without JavaScript measurement.

## QA Checklist

- [x] Inspect production route/rendering boundaries
- [ ] Run Lighthouse against production-served Home, Articles, and one article
- [x] Confirm no render-blocking third-party requests
- [x] Confirm all images have dimensions/aspect ratios
- [x] Verify noncritical image behavior and stable dimensions
- [ ] Check mobile throttling and LCP element
- [x] Confirm no visible layout shift from menu, cards, or form errors in local QA
- [ ] Review cache headers after GitHub Pages deployment
