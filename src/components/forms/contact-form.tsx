"use client";

import { FormEvent, useState } from "react";
import { contactLimits, type ContactErrors, type ContactFields, validateContactFields } from "@/lib/contact-validation";

const emptyFields: ContactFields = { name: "", email: "", message: "" };

export function ContactForm({ contactEmail }: { contactEmail: string | null }) {
  const [fields, setFields] = useState<ContactFields>(emptyFields);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<{ type: "idle" | "info" | "error"; message: string }>({ type: "idle", message: "" });

  const update = (key: keyof ContactFields, value: string) => { setFields((current) => ({ ...current, [key]: value })); setErrors((current) => ({ ...current, [key]: undefined })); };
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContactFields(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) { setStatus({ type: "error", message: "Check the highlighted fields." }); return; }
    if (!contactEmail) return;
    const subject = encodeURIComponent(`Website message from ${fields.name.trim()}`);
    const body = encodeURIComponent(`Name: ${fields.name.trim()}\nEmail: ${fields.email.trim()}\n\n${fields.message.trim()}`);
    window.open(`mailto:${contactEmail}?subject=${subject}&body=${body}`, "_self");
    setStatus({ type: "info", message: "Your email application should now be open. Review the message there and send it to complete delivery." });
  }

  if (!contactEmail) return <div className="contact-form"><p><strong>Contact email not yet published.</strong></p><p>The site owner must configure a public contact address before messages can be prepared from this page.</p></div>;

  return <form className="contact-form" onSubmit={submit} noValidate>
    <div className="form-field"><label htmlFor="name">Name <span aria-hidden="true">*</span></label><input id="name" name="name" autoComplete="name" required maxLength={contactLimits.name} value={fields.name} onChange={(event) => update("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />{errors.name ? <p className="field-error" id="name-error">{errors.name}</p> : null}</div>
    <div className="form-field"><label htmlFor="email">Email <span aria-hidden="true">*</span></label><input id="email" name="email" type="email" inputMode="email" autoComplete="email" required maxLength={contactLimits.email} value={fields.email} onChange={(event) => update("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />{errors.email ? <p className="field-error" id="email-error">{errors.email}</p> : null}</div>
    <div className="form-field"><label htmlFor="message">Message <span aria-hidden="true">*</span></label><textarea id="message" name="message" required rows={7} maxLength={contactLimits.message} value={fields.message} onChange={(event) => update("message", event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={`message-help${errors.message ? " message-error" : ""}`} /><p className="field-help" id="message-help">General website messages only. Do not include sensitive health information. {fields.message.length}/{contactLimits.message}</p>{errors.message ? <p className="field-error" id="message-error">{errors.message}</p> : null}</div>
    <button className="button button-primary" type="submit">Prepare email</button>
    <div className={`form-status ${status.type === "error" ? "form-status-error" : ""}`} role={status.type === "error" ? "alert" : "status"} aria-live="polite">{status.message}</div>
  </form>;
}
