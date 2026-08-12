# Maintenance

- **Dependencies:** review monthly or after security advisories; update in a branch, inspect changelogs, and run all quality/build checks. Expedite applicable high-severity runtime fixes.
- **Articles:** retain source/version and medical approval evidence for every clinical change. Review interval is to be confirmed by the site owner/medical editor.
- **Links/references:** periodically check for broken/redirected sources and have replacements medically reviewed.
- **SEO:** verify Search Console-equivalent crawl reports, sitemap, canonicals, structured data, redirects, and social cards after route/domain/content changes.
- **Accessibility:** rerun automated and manual keyboard/zoom/screen-reader checks after component/design changes and periodically after launch.
- **Privacy/security:** reconcile actual vendors/data flows with policy, triage dependencies, inspect the published artifact/headers, and rotate/revoke any exposed secret.
- **Backup:** GitHub and Git history back up application/content; separately retain approval and image-rights evidence. Enable branch protection and MFA, and confirm recovery access for GitHub, DNS, and email accounts.
- **Monitoring:** review failed Actions/Pages deployments, uptime, broken links, crawl reports, and performance. Add external uptime alerts if the site becomes operationally important.
- **Rollback:** revert the faulty commit (or reapply the last known-good tree) and let the Pages workflow publish the resulting commit; test this process after material infrastructure changes.

Ownership and exact operating cadence must be confirmed before launch.
