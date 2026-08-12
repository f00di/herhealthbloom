"use client";

import { FormEvent, useState } from "react";
import { contactLimits, type ContactErrors, type ContactFields, validateContactFields } from "@/lib/contact-validation";

const emptyFields: ContactFields = { name: "", email: "", message: "" };

export function ContactForm() {
  const [fields, setFields] = useState<ContactFields>(emptyFields);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message: string }>({ type: "idle", message: "" });
  const [startedAt, setStartedAt] = useState(() => Date.now());
  const [website, setWebsite] = useState("");

  const update = (key: keyof ContactFields, value: string) => { setFields((current) => ({ ...current, [key]: value })); setErrors((current) => ({ ...current, [key]: undefined })); };
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContactFields(fields);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) { setStatus({ type: "error", message: "Check the highlighted fields." }); return; }
    setStatus({ type: "loading", message: "Sending your message…" });
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...fields, website, startedAt }) });
      const data = await response.json() as { message?: string; errors?: ContactErrors };
      if (!response.ok) { setErrors(data.errors ?? {}); setStatus({ type: "error", message: data.message ?? "The message could not be sent." }); return; }
      setFields(emptyFields); setWebsite(""); setStartedAt(Date.now()); setStatus({ type: "success", message: data.message ?? "Your message has been sent." });
    } catch { setStatus({ type: "error", message: "The message could not be sent. Check your connection and try again." }); }
  }

  return <form className="contact-form" onSubmit={submit} noValidate>
    <div className="form-field"><label htmlFor="name">Name <span aria-hidden="true">*</span></label><input id="name" name="name" autoComplete="name" required maxLength={contactLimits.name} value={fields.name} onChange={(event) => update("name", event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />{errors.name ? <p className="field-error" id="name-error">{errors.name}</p> : null}</div>
    <div className="form-field"><label htmlFor="email">Email <span aria-hidden="true">*</span></label><input id="email" name="email" type="email" inputMode="email" autoComplete="email" required maxLength={contactLimits.email} value={fields.email} onChange={(event) => update("email", event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />{errors.email ? <p className="field-error" id="email-error">{errors.email}</p> : null}</div>
    <div className="form-field"><label htmlFor="message">Message <span aria-hidden="true">*</span></label><textarea id="message" name="message" required rows={7} maxLength={contactLimits.message} value={fields.message} onChange={(event) => update("message", event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={`message-help${errors.message ? " message-error" : ""}`} /><p className="field-help" id="message-help">General website messages only. Do not include sensitive health information. {fields.message.length}/{contactLimits.message}</p>{errors.message ? <p className="field-error" id="message-error">{errors.message}</p> : null}</div>
    <div className="honeypot" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} /></div>
    <button className="button button-primary" type="submit" disabled={status.type === "loading"}>{status.type === "loading" ? "Sending…" : "Send message"}</button>
    <div className={`form-status ${status.type === "error" ? "form-status-error" : status.type === "success" ? "form-status-success" : ""}`} role={status.type === "error" ? "alert" : "status"} aria-live="polite">{status.message}</div>
  </form>;
}
