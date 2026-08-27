import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { WarningIcon } from "@/components/ui/icons";
import { getContactEmail } from "@/config/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata("Contact Us", "Send a general, non-urgent website message. Do not submit personal medical records or sensitive health information.", "/contact");

export default function ContactPage() {
  const contactEmail = getContactEmail();
  return <div className="page-shell"><header className="page-hero container narrow-page"><h1>Contact Us</h1></header><div className="container contact-layout section section-first"><section aria-labelledby="contact-form-heading"><h2 id="contact-form-heading">Contact us</h2><ContactForm contactEmail={contactEmail} /></section><aside className="contact-notice"><WarningIcon /><div><h2>Medical Information</h2><p>We do not request or intentionally collect personal medical information.</p><p>Please do not send confidential medical information or personal health records through this website.</p><p>If you require medical advice, please consult your own healthcare professional.</p><p><strong>Delivery status:</strong> This static website can prepare a message in your email application, but it cannot send the message for you. Review and send the email there to complete delivery.</p></div></aside></div></div>;
}
