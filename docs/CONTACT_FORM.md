# Static Contact Experience

GitHub Pages cannot run a contact API. When `NEXT_PUBLIC_CONTACT_EMAIL` is configured, the page validates `name`, `email`, and `message`, then opens a prefilled `mailto:` draft in the visitor’s email application. The site does not transmit, store, or claim to have delivered the message. The visitor must review and send it from their email application.

Without a configured public address, the page displays an explicit unavailable state and renders no form controls. No address is fabricated.

There are no appointment, symptom, diagnosis, prescription, or upload fields. The page warns visitors not to include medical records, laboratory reports, imaging, prescription details, or other sensitive health information, and directs emergencies to an appropriate emergency healthcare service.

If reliable in-page delivery is required later, move to a server-capable host or add an owner-approved form processor only after reviewing its privacy terms, retention, regional processing, spam controls, accessibility, verified delivery, and policy disclosures. Never place provider API keys in browser-visible variables.
