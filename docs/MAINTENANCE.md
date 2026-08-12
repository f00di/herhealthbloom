# Maintenance

- **Dependencies:** review monthly or after security advisories; update in a branch, inspect changelogs, and run all quality/build checks. Expedite applicable high-severity runtime fixes.
- **Articles:** retain source/version and medical approval evidence for every clinical change. Review interval is to be confirmed by the site owner/medical editor.
- **Links/references:** periodically check for broken/redirected sources and have replacements medically reviewed.
- **SEO:** verify Search Console-equivalent crawl reports, sitemap, canonicals, structured data, redirects, and social cards after route/domain/content changes.
- **Accessibility:** rerun automated and manual keyboard/zoom/screen-reader checks after component/design changes and periodically after launch.
- **Privacy/security:** reconcile actual vendors/data flows with policy, triage dependencies, review headers/form abuse/log retention, and rotate/revoke any exposed secret.
- **Backup:** GitHub and Git history back up application/content; enable branch protection and MFA. Ensure owner access/recovery for GitHub, Vercel, DNS, and email provider.
- **Monitoring:** review failed deployments, function errors/rate spikes, provider delivery failures, uptime, and performance. Do not retain message bodies in routine logs.
- **Rollback:** keep recent verified Vercel deployments and use commit-based rollback; test the documented process after material infrastructure changes.

Ownership and exact operating cadence must be confirmed before launch.
