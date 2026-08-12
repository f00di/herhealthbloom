# Security

## Threat Surface and Controls

The published application is a static, read-only site. It has no database, accounts, payments, uploads, runtime API, analytics, or application cookie. That substantially reduces the attack surface.

- Article input is repository-controlled JSON validated during the build. Image paths must be local and reference URLs must use HTTPS.
- User-entered contact text remains in the browser until the visitor chooses to send it through their own email application. It is not rendered as HTML, posted to this site, logged by an application server, or stored by the site.
- No file upload or medical-record field exists. Prominent copy warns against including sensitive health data and against using contact for emergencies.
- Local images have fixed dimensions; there are no third-party embeds or browser scripts.
- The deployment workflow has read-only repository access plus the minimum Pages and identity permissions required for deployment. Quality gates run before artifact upload.
- `.env*` files are ignored except the placeholder example. `NEXT_PUBLIC_` variables are explicitly public and must never contain secrets.

## GitHub Pages Limitation

Static export cannot apply Next.js response headers, and GitHub Pages does not expose application-level header configuration. The site therefore cannot enforce a custom CSP, frame policy, HSTS policy, or Permissions Policy from this repository. Inspect GitHub’s actual production headers after deployment. If custom security headers become mandatory, place an approved configurable CDN in front of the site or move to a host that supports them, then test all required resources before enforcing a policy.

## Secrets and Account Safety

No production secret is required. `NEXT_PUBLIC_CONTACT_EMAIL` is a public repository variable and becomes visible in the page source. Never place credentials, private API keys, password-bearing URLs, tokens, or sensitive data in GitHub variables intended for browser use, repository files, screenshots, Actions logs, or documentation. If a secret is exposed, revoke/rotate it immediately and inspect Git history and logs; deleting the current file is insufficient.

Protect the GitHub, registrar, and email accounts with MFA and documented owner recovery. Use branch/environment protection where available.

## Dependency Security

Keep direct dependencies minimal, retain the lockfile, review automated advisories, run `npm audit` as a signal rather than proof, prioritize applicable runtime/high-severity findings, and validate framework security releases before deployment.

## Review Checklist

- [x] No secret or credential found in the repository scan
- [x] Contact validation and no-delivery-claim behavior covered by tests
- [x] No server API, storage, analytics, upload, or account surface
- [x] Source references and local image paths validated at build time
- [x] Dependency audit passed with 0 vulnerabilities on 2026-08-12
- [ ] GitHub account, Pages environment, branch protection, and MFA verified by the owner
- [ ] Production response headers and published artifact inspected after deployment
