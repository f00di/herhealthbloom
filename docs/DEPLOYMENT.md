# GitHub Pages Deployment

## Project and Hosting Stack

Her HealthBloom is a Next.js 16 App Router content site. Article JSON is validated and rendered at build time; search/topic filtering, navigation, accordions, and optional email-draft preparation run in the browser. There is no database, authentication, payment system, upload service, server API, or runtime secret.

The selected stack is:

```text
main branch → GitHub Actions quality gates → Next.js static export → GitHub Pages
```

GitHub Pages fits the current read-only site without adding a server or paid runtime. `next.config.ts` uses `output: "export"`, unoptimized local images, trailing-slash routes, and the Pages-provided base path. The workflow publishes only `out/`.

## One-Time GitHub Configuration

1. Open the repository on GitHub and select **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Optionally open **Settings → Secrets and variables → Actions → Variables** and add `NEXT_PUBLIC_CONTACT_EMAIL` with an owner-approved public mailbox. Do not use a medical-records or emergency-care inbox.
4. Protect the `main` branch and require the Pages workflow/checks if the repository plan supports it.
5. Enable MFA and document recovery access for the repository and domain accounts.

The workflow runs on every push to `main` and via **Actions → Deploy Next.js site to GitHub Pages → Run workflow**.

## Build and Environment Contract

| Name | Source | Exposure | Purpose |
|---|---|---|---|
| `PAGES_BASE_PATH` | `actions/configure-pages` output | Build only | Prefixes links/assets for a project site such as `/herhealthbloom` |
| `NEXT_PUBLIC_SITE_URL` | `actions/configure-pages` output | Public | Full canonical URL, including a project path or custom domain |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Optional GitHub Actions variable | Public | Recipient used in a browser-created `mailto:` draft |

No deployment secret is required. Never place a secret in a `NEXT_PUBLIC_` variable; those values are embedded in browser assets.

## Automated Deployment

`.github/workflows/deploy-pages.yml` performs these ordered steps:

1. Checks out the exact commit and installs Node.js 22 dependencies with `npm ci`.
2. Reads the Pages base URL/base path from GitHub.
3. Runs lint, strict TypeScript checking, and all tests.
4. Builds the static `out/` artifact with deployment-correct URLs.
5. Uploads the artifact and deploys it to the protected `github-pages` environment.

A failed quality gate or build prevents deployment. The deployment is traceable to its workflow run and commit.

## Pre-Launch Checks

- Record owner medical and legal approval for all public copy, disclaimers, and source-backed articles.
- Confirm the public contact address, or accept the explicit “not yet published” contact state.
- Confirm the Pages workflow passed for the intended commit.
- Verify `/`, `/articles/`, both article routes, `/about/`, `/faq/`, `/contact/`, `/privacy/`, the custom 404, images, and topic-query filtering.
- Inspect canonicals, Open Graph images, JSON-LD, `sitemap.xml`, and `robots.txt` against the live URL.
- Check mobile/desktop layouts, keyboard navigation, zoom, screen-reader behavior, browser console, and Lighthouse on the deployed site.
- Confirm no `.env` file, credential, private health data, or unexpected source document is present in the published artifact.

## Custom Domain and HTTPS

GitHub Pages provides HTTPS for the default `github.io` address. To add a custom domain, configure it under **Settings → Pages**, add the exact GitHub-provided DNS records at the registrar, wait for verification, then enable **Enforce HTTPS**. Re-run the workflow afterward so canonical URLs and the base path are rebuilt for the custom domain. Verify both apex/`www` behavior and designate one canonical host.

## Platform Limitations

- GitHub Pages serves static files only. The contact page prepares an email in the visitor’s email application; it does not send or confirm delivery.
- GitHub Pages does not provide application-controlled response headers. The previous Next.js header configuration was removed because static export cannot apply it. Review GitHub’s served headers after launch; use a host/CDN with configurable headers if a strict CSP, frame policy, or custom caching policy becomes mandatory.
- On a project site, `robots.txt` lives below the repository path. Submit the generated sitemap directly to search tools; a custom domain restores the conventional origin-root location.
- There are no preview deployments in this workflow. Pull requests should run the same checks locally or gain a separate non-production workflow if preview URLs become necessary.

## Production Smoke Test

After each deployment, confirm the Actions deployment URL, open all primary routes directly (including after refresh), test the mobile menu and article filters, follow internal/article-reference links, open the contact draft if configured, check the console/network panel for 404s, and validate the sitemap/canonical host. Do not send sensitive health information during testing.

## Monitoring, Backup, and Rollback

- Review failed workflows and Pages availability after each content release; add external uptime monitoring if the site becomes operationally important.
- Git history is the code/content backup. Keep medical approval and image-rights evidence in an owner-controlled system and periodically verify repository recovery access.
- Roll back by reverting the faulty commit on `main` (or reapplying the last known-good tree) and letting the workflow deploy that new commit. GitHub Pages has no database migration or runtime state to restore.
- Review dependencies monthly and promptly after applicable security advisories. Re-run accessibility, metadata, link, and performance checks after material framework/content changes.
