# Accessibility

Target: WCAG 2.2 AA-quality implementation, subject to final manual assistive-technology and browser testing.

## Implementation

- A visible-on-focus skip link targets the unique main landmark.
- Semantic header/nav/main/footer, article, lists, headings, forms, tables, and native disclosure elements are used.
- Header links expose active-page state; the mobile menu uses a named button, `aria-expanded`, focus movement, Escape close, outside interaction, and route-change close.
- Focus rings are high contrast and never globally removed; touch targets are at least approximately 44px.
- Text and control colors target AA contrast; warnings include text/icon/border, not color alone.
- All inputs have labels, descriptions, field errors, `aria-invalid`, and a polite/alert submission region.
- FAQ and mobile TOC use native `details/summary`, retaining keyboard behavior and crawlable HTML.
- Images have useful alt text or are explicitly decorative.
- Reduced-motion media rules remove smooth scrolling and transitions.
- Long titles, URLs, tables, and citations wrap or scroll inside labeled regions without page overflow.

## QA Checklist

- [x] Complete keyboard-oriented component and route pass
- [x] Test mobile menu focus, Escape, focus trap, and focus return
- [x] Test FAQ and TOC native keyboard behavior
- [x] Verify one H1 and logical heading order per page
- [x] Verify input errors and submission state announcements in component tests
- [ ] Check 200% and 400% zoom/reflow
- [ ] Run automated axe/Lighthouse checks on production output
- [x] Test/inspect reduced-motion CSS behavior
- [x] Inspect contrast tokens and component states
- [x] Test 320px width without horizontal page overflow

A manual screen-reader/browser matrix remains a pre-launch gate.
