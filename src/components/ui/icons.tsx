import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };

export function MenuIcon(props: IconProps) { return <svg {...base} {...props}><path d="M4 7h16M4 12h16M4 17h16" /></svg>; }
export function CloseIcon(props: IconProps) { return <svg {...base} {...props}><path d="m6 6 12 12M18 6 6 18" /></svg>; }
export function SearchIcon(props: IconProps) { return <svg {...base} {...props}><circle cx="11" cy="11" r="7" /><path d="m16.5 16.5 4 4" /></svg>; }
export function ArrowIcon(props: IconProps) { return <svg {...base} {...props}><path d="M5 12h14M14 7l5 5-5 5" /></svg>; }
export function WarningIcon(props: IconProps) { return <svg {...base} {...props}><path d="M12 3 2.7 20h18.6L12 3Z" /><path d="M12 9v5M12 17.5h.01" /></svg>; }
export function InfoIcon(props: IconProps) { return <svg {...base} {...props}><circle cx="12" cy="12" r="9" /><path d="M12 11v6M12 7h.01" /></svg>; }

export function TopicIcon({ name, ...props }: IconProps & { name: string }) {
  if (name === "cycle") return <svg {...base} {...props}><path d="M19 8a8 8 0 0 0-14-2M5 6v4h4M5 16a8 8 0 0 0 14 2M19 18v-4h-4" /></svg>;
  if (name === "seedling") return <svg {...base} {...props}><path d="M12 21V10M12 15c-5 0-8-3-8-8 5 0 8 3 8 8ZM12 12c0-5 3-8 8-8 0 5-3 8-8 8Z" /></svg>;
  if (name === "sun") return <svg {...base} {...props}><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>;
  if (name === "heart") return <svg {...base} {...props}><path d="M20.8 5.8a5.5 5.5 0 0 0-7.8 0L12 6.9l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 22l8.8-8.4a5.5 5.5 0 0 0 0-7.8Z" /></svg>;
  if (name === "ribbon") return <svg {...base} {...props}><path d="M12 3c3.2 3.4 5 6.1 5 8.3 0 3.2-2.2 6.2-5 9.7-2.8-3.5-5-6.5-5-9.7C7 9.1 8.8 6.4 12 3Z" /><path d="m8.6 17.1 7-8.8" /></svg>;
  return <svg {...base} {...props}><path d="M12 21c4-4 7-8.2 7-12a7 7 0 0 0-14 0c0 3.8 3 8 7 12Z" /><path d="M9 10.5h6M12 7.5v6" /></svg>;
}
