# Risks and Assumptions

| Level | Item | Current assumption | Mitigation |
|---|---|---|---|
| HIGH | Final owner medical/legal sign-off not recorded | Source fidelity is implemented, but a repository build is not editorial approval | Obtain and record authorized review before public launch; do not fabricate review dates |
| HIGH | Contact delivery credentials absent | Form endpoint must not pretend to send | Return a clear unavailable response until server-only variables are configured |
| MEDIUM | Production domain unknown | localhost fallback is used outside production config | Set `NEXT_PUBLIC_SITE_URL` at deployment and verify every canonical |
| MEDIUM | Contact email unknown | No public email is fabricated | Configure a recipient privately; only display an address if the owner approves it |
| MEDIUM | Non-logo DOCX image licensing unknown | Generic embedded images are not assumed reusable | Use the supplied brand logo plus original non-clinical illustrations; obtain rights evidence before adding source photos |
| MEDIUM | Source clinical wording may need jurisdiction/current-guideline review | Quantities and recommendations were preserved instead of silently edited | Review the medical TODOs and references with the authorized medical editor |
| LOW | Remaining launch articles absent | Only two requested article records appear | Add reviewed files through the documented workflow |
| LOW | Analytics decision unknown | No analytics or marketing cookies are installed | Keep policy aligned; revisit only after an explicit decision |

Safe implementation assumptions: no database, authentication, payments, uploads, appointments, analytics, newsletters, or third-party client scripts are required. Public content is server/static rendered; only search, disclosures, mobile navigation, and the contact form need client JavaScript.
