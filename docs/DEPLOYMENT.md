# Deployment

## Target

```text
GitHub → Vercel preview → Vercel production
```

## Prerequisites

Passing lint/typecheck/tests/build, approved medical/legal content, a confirmed production domain/contact address, a Vercel project, and—if contact delivery is enabled—a verified Resend sender domain and private credentials. The site name and supplied logo are already configured.

## Build Configuration

- Framework preset: Next.js
- Install: `npm ci`
- Build: `npm run build`
- Output: Next.js default
- Runtime: the version pinned by `package.json`/Vercel settings
- Root directory: repository root

## Environment Variables

Set variables from [ENVIRONMENT_VARIABLES.md](ENVIRONMENT_VARIABLES.md) separately for preview/production. Never commit values. Contact variables are optional for build but required for live delivery.

## Deployment Process

1. Push a reviewed commit to GitHub.
2. Import/connect the repository in Vercel and confirm root/build/runtime settings.
3. Add `NEXT_PUBLIC_SITE_URL` with the exact HTTPS production origin; add server-only email variables if approved.
4. Deploy a preview; run the route, form, metadata, viewport, accessibility, and content checks.
5. Configure the confirmed custom domain and DNS in the owner's registrar/Vercel.
6. Wait for HTTPS issuance, then redirect alternate host variants to the canonical host.
7. Redeploy with the final origin and re-check canonical, sitemap, robots, JSON-LD, images, and email delivery.

## Logs and Monitoring

Use Vercel function/deployment logs and Resend delivery events. Avoid logging message bodies or unnecessary personal information. Configure alerts for failed builds/function spikes if the chosen plans support them; add external error tracking only after a privacy review.

## Rollback and Recovery

GitHub is the source-of-truth backup for code/content. Roll back by promoting a previously verified Vercel deployment or reverting the faulty commit and redeploying. Content recovery uses Git history. Protect repository, registrar, Vercel, and email-provider owner accounts with MFA and documented owner access.

## Post-deployment Verification

Check all routes, custom 404, mobile menu, search/filter, article status/warnings/references, contact disabled or real delivery state, response headers, HTTPS/canonical redirects, sitemap/robots, social previews, browser console, logs, and no public secret exposure. Lighthouse and real-device QA remain manual launch gates.
