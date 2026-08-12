import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { WarningIcon } from "@/components/ui/icons";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("Contact Us", "Send a general, non-urgent website message. Do not submit personal medical records or sensitive health information.", "/contact");

export default function ContactPage() {
  return <div className="page-shell"><header className="page-hero container narrow-page"><p className="eyebrow">Contact Us</p><h1>Send a general message</h1><p>Use this form for general questions or feedback about the educational website. It is not an appointment, diagnosis, or medical-advice service.</p></header><div className="container contact-layout section section-first"><section aria-labelledby="contact-form-heading"><h2 id="contact-form-heading">Contact form</h2><ContactForm /></section><aside className="contact-notice"><WarningIcon /><div><h2>Protect your privacy</h2><p>Do not submit confidential medical information, personal health records, laboratory reports, imaging studies, prescription details, or other sensitive health information.</p><h3>Not for emergencies</h3><p>This form is not monitored as an emergency service. If you believe you are experiencing a medical emergency, contact an appropriate emergency healthcare service.</p><p><strong>Delivery status:</strong> Messages are sent only after the site owner configures the approved server-side email provider. The form reports clearly if delivery is unavailable.</p></div></aside></div></div>;
}
