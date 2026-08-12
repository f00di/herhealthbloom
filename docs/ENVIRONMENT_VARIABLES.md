# Environment Variables

| Variable | Required | Exposure | Purpose |
|---|---:|---|---|
| `NEXT_PUBLIC_SITE_URL` | Production: automatic | Public | Full canonical Pages URL, including the project path and no trailing slash |
| `PAGES_BASE_PATH` | Production: automatic | Build only | Project path returned by GitHub Pages, such as `/herhealthbloom` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional | Public | Owner-approved recipient used to prepare a `mailto:` draft |

The Pages workflow supplies the URL and base path from `actions/configure-pages`. Add `NEXT_PUBLIC_CONTACT_EMAIL` as a GitHub Actions repository variable only if publishing the mailbox is approved. It is embedded in the static site and is not a secret.

For local testing, copy `.env.example` to ignored `.env.local` and use placeholders or approved values. Never commit `.env` files or put credentials in `NEXT_PUBLIC_` variables.
