# Environment Variables

| Variable | Required | Server/Client | Purpose |
|---|---:|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production: yes | Public | Exact canonical HTTPS origin, with no path; not a secret |
| `RESEND_API_KEY` | Only for live contact email | Server only | Authenticate Resend API requests |
| `CONTACT_TO_EMAIL` | Only for live contact email | Server only | Approved recipient mailbox; not displayed automatically |
| `CONTACT_FROM_EMAIL` | Only for live contact email | Server only | Verified sender identity used by Resend |

Missing email variables keep the contact route safely disabled. `.env.example` must contain placeholders only. Variables are configured in Vercel per environment; local values belong in ignored `.env.local`.
