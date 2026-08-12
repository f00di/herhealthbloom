# Contact Form

## Fields and UX

The form accepts required `name`, `email`, and `message`; a hidden honeypot and form-start timestamp support abuse checks. There are no appointment, symptom, diagnosis, prescription, or upload fields. Client validation provides immediate accessible errors; the server repeats all authoritative validation. Loading disables repeat submission, and live regions announce success/error.

## Server Architecture

`POST /api/contact` accepts JSON only, enforces both declared and actual UTF-8 body size plus field limits, rejects suspicious honeypot/too-fast submissions, applies a best-effort IP rate window, escapes message content, and sends through Resend's HTTPS API only when configured. It does not write to a database. Without credentials, it returns `503` and instructs the user that delivery is unavailable; it never reports false success.

## Environment Variables

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`
- `NEXT_PUBLIC_SITE_URL` (not an email secret; required for canonical production URL)

## Privacy and Emergency Warning

The page states: do not submit confidential medical information, personal health records, laboratory reports, imaging studies, prescription details, or other sensitive health information. The form is not monitored as an emergency service; users who believe they have an emergency should contact an appropriate emergency healthcare service.

## Production Hardening

Verify the sender domain, configure provider retention/security, set provider-level abuse controls, consider a shared serverless rate limiter if traffic warrants it, monitor delivery failures without logging message bodies, and perform an end-to-end delivery test after deploy.
