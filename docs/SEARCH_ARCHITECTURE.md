# Search Architecture

## Indexed Fields

Title, excerpt, category label, and keywords are projected from validated article metadata. Body copy is intentionally excluded to keep the client payload small; approved keywords cover subject-level discovery.

## Implementation

The article index is rendered with a serializable summary array. A client component lowercases Unicode text, trims whitespace, collapses repeated spaces, and matches every query token against a combined searchable string. Search is case-insensitive. Query and selected topic combine with logical AND; `?topic=` initializes a known topic.

## Accessibility and States

The visible label describes the search input. Filter buttons communicate selected state with `aria-pressed`; result count uses a polite live region. “No articles found” offers one button to clear both query and filters. Every result remains a normal link.

## Performance and Scaling

For two to roughly tens of summaries, in-browser filtering is immediate and requires no service, tracking, or network request. Measure serialized index weight around 100+ long records. A future adapter may add a prebuilt compact index, server search, or hosted service without changing article records or result components.
