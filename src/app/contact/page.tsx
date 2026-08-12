import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { WarningIcon } from "@/components/ui/icons";
import { getContactEmail } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("Contact Us", "Send a general, non-urgent website message. Do not submit personal medical records or sensitive health information.", "/contact");

export default function ContactPage() {
  const contactEmail = getContactEmail();
  return <div className="page-shell"><header className="page-hero container narrow-page"><p className="eyebrow">Contact Us</p><h1>Prepare a general message</h1><p>Use this page for general questions or feedback about the educational website. It is not an appointment, diagnosis, or medical-advice service.</p></header><div className="container contact-layout section section-first"><section aria-labelledby="contact-form-heading"><h2 id="contact-form-heading">Email contact</h2><ContactForm contactEmail={contactEmail} /></section><aside className="contact-notice"><WarningIcon /><div><h2>Protect your privacy</h2><p>Do not submit confidential medical information, personal health records, laboratory reports, imaging studies, prescription details, or other sensitive health information.</p><h3>Not for emergencies</h3><p>This contact option is not monitored as an emergency service. If you believe you are experiencing a medical emergency, contact an appropriate emergency healthcare service.</p><p><strong>Delivery status:</strong> This static website can prepare a message in your email application, but it cannot send the message for you. Review and send the email there to complete delivery.</p></div></aside></div></div>;
}
