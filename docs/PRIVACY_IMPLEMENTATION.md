# Privacy Implementation

The legal page preserves the supplied policy's meaning while distinguishing conditional features from current behavior. It still requires owner/legal approval before public launch.

| Privacy statement | Implemented feature | Current status |
|---|---|---|
| Cookies | No application cookie is set intentionally | Not implemented |
| Analytics | No analytics library or tracking script | Not implemented |
| Contact form | Name, email, and message are transmitted to the same-origin endpoint and, when configured, Resend for email delivery | Implemented; delivery disabled without credentials |
| Newsletter | No subscription UI/list | Not implemented |
| Technical logs | Vercel/hosting and email provider may process standard request/delivery metadata under their configuration | Platform-dependent; owner must review retention |
| Third-party links | Article references link to cited external sources | Implemented; destinations require periodic review |
| Medical uploads | No upload control or record field exists | Prohibited by design |
| Local search | Filtering runs in the browser and is not submitted to the server | Implemented |
| Rate limiting | Server temporarily holds coarse IP request timestamps in process memory | Best effort, ephemeral, not a durable profile |

Users are explicitly told not to submit medical records, laboratory reports, imaging studies, personal health information, prescription details, or other sensitive health information. No consent banner is added because the application installs no nonessential cookies; this must be revisited if analytics, newsletters, embedded media, or advertising is introduced.
