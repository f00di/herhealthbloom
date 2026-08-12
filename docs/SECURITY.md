# Security

## Threat Surface

The public static pages have a small attack surface. Material risks are contact spam/abuse, injection into email, oversized or malformed requests, exposed provider secrets, malicious reference URLs, dependency vulnerabilities, unsafe content rendering, and accidental collection/logging of health information.

## Controls

- Contact JSON is server-validated for type, required fields, length, email syntax, honeypot, and reasonable completion time.
- A best-effort per-IP in-memory window limits bursts; production-scale abuse protection should move to a shared edge/rate-limit store or provider controls.
- User input is encoded as plain text/escaped HTML before provider delivery and never rendered with `dangerouslySetInnerHTML`.
- Only same-origin form submission is expected; restrictive security headers are configured and `/api` is not indexed.
- Provider variables are server-only. No API key uses a public prefix.
- No file uploads, medical-record fields, database, accounts, payments, or persistent contact storage exist.
- Content URLs accept only local images and safe HTTPS reference links during validation.
- Error responses do not echo secrets or provider payloads.

## Secrets

Secrets must never be committed, placed in browser variables, screenshots, logs, or documentation. `.env.example` contains names/placeholders only. Vercel environment configuration owns production values. If exposed, revoke/rotate the value and inspect Git history/logs; deleting only the current file is insufficient.

## Dependency Security

Keep direct dependencies minimal, commit the lockfile, review automated advisories, run `npm audit` as a signal (not proof), prioritize runtime/high-severity findings, and validate framework security releases before deployment.

## Review Checklist

- [x] No secret or real credential found in repository scan
- [x] Contact validation, honeypot, timing, and rate tests pass
- [ ] Production recipient/sender/API key configured server-side
- [ ] Email-provider domain and sender verified
- [x] Security headers inspected on local production output
- [x] Source references imported and URL format validated; ongoing link review required
- [x] Dependency audit passed with 0 vulnerabilities on 2026-08-12
- [ ] Logs checked to ensure message bodies/health data are not unnecessarily retained
