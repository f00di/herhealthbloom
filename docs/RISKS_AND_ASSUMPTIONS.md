# Risks and Assumptions

| Level | Item | Current assumption | Mitigation |
|---|---|---|---|
| HIGH | Final owner medical/legal sign-off not recorded | Source fidelity is implemented, but a repository build is not editorial approval | Obtain and record authorized review before public launch; do not fabricate review dates |
| HIGH | Public contact address unconfirmed | The static site must not fabricate an address or claim delivery | Show a clear unavailable state until an owner-approved public mailbox is configured |
| MEDIUM | Final custom domain unknown | GitHub's Pages URL is used initially | The workflow reads the Pages URL automatically; rebuild and verify canonicals after adding a custom domain |
| MEDIUM | Contact email unknown | No public email is fabricated | Configure `NEXT_PUBLIC_CONTACT_EMAIL` only if the owner approves publishing it |
| MEDIUM | Non-logo DOCX image licensing unknown | Generic embedded images are not assumed reusable | Use the supplied brand logo plus original non-clinical illustrations; obtain rights evidence before adding source photos |
| MEDIUM | Source clinical wording may need jurisdiction/current-guideline review | Quantities and recommendations were preserved instead of silently edited | Review the medical TODOs and references with the authorized medical editor |
| LOW | Remaining launch articles absent | Only two requested article records appear | Add reviewed files through the documented workflow |
| LOW | Analytics decision unknown | No analytics or marketing cookies are installed | Keep policy aligned; revisit only after an explicit decision |

Safe implementation assumptions: no database, authentication, payments, uploads, appointments, analytics, newsletters, or third-party client scripts are required. Public content is server/static rendered; only search, disclosures, mobile navigation, and the contact form need client JavaScript.
