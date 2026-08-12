import { InfoIcon, WarningIcon } from "@/components/ui/icons";

export function MedicalCallout({ title, text, tone = "note" }: { title: string; text: string; tone?: "note" | "important" }) {
  return <aside className={`medical-callout ${tone === "important" ? "medical-callout-important" : ""}`} aria-label={title}>
    <span className="callout-icon"><InfoIcon /></span><div><h3>{title}</h3><p>{text}</p></div>
  </aside>;
}

export function EmergencyWarning({ title, text }: { title: string; text: string }) {
  return <aside className="emergency-warning" role="note" aria-label={title}>
    <span className="callout-icon"><WarningIcon /></span><div><h3>{title}</h3><p>{text}</p></div>
  </aside>;
}
