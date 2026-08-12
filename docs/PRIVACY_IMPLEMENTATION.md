# Privacy Implementation

The legal page preserves the supplied policy's meaning while distinguishing conditional features from current behavior. It still requires owner/legal approval before public launch.

| Privacy statement | Implemented feature | Current status |
|---|---|---|
| Cookies | No application cookie is set intentionally | Not implemented |
| Analytics | No analytics library or tracking script | Not implemented |
| Contact option | Draft fields remain in the browser; if configured, a `mailto:` draft opens in the visitor's email application | Implemented; unavailable without a public recipient |
| Newsletter | No subscription UI/list | Not implemented |
| Technical logs | GitHub Pages may process standard hosting request metadata; email providers process messages only if the visitor sends one | Platform-dependent; owner must review applicable terms |
| Third-party links | Article references link to cited external sources | Implemented; destinations require periodic review |
| Medical uploads | No upload control or record field exists | Prohibited by design |
| Local search | Filtering runs in the browser and is not submitted to the server | Implemented |

Users are explicitly told not to submit medical records, laboratory reports, imaging studies, personal health information, prescription details, or other sensitive health information. No consent banner is added because the application installs no nonessential cookies; this must be revisited if analytics, newsletters, embedded media, or advertising is introduced.
