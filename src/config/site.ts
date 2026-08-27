export const siteConfig = {
  /** Supplied logo establishes this working brand; the production domain remains unconfirmed. */
  siteName: "Her HealthBloom",
  shortName: "Her HealthBloom",
  siteDescription:
    "Clear, evidence-based educational information about women's health under the supervision of Dr. Farkhanda Kashif, FCPS, MRCOG.",
  defaultOrigin: "http://localhost:3000",
  author: {
    name: "Dr. Farkhanda Kashif",
    credentials: "FCPS, MRCOG",
    role: "Obstetrician and Gynecologist",
  },
  socialLinks: [] as { label: string; href: string }[],
  copyright: "© 2026 Dr. Farkhanda Kashif. All rights reserved.",
  medicalDisclaimer:
    "The information on this website is for educational and informational purposes only and is not intended as medical advice. This content is not a substitute for professional medical advice, diagnosis, or treatment.",
} as const;

export const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "Articles / Blog", href: "/articles" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy & Medical Disclaimer", href: "/privacy" },
] as const;

export function getBasePath(): string {
  return process.env.NEXT_PUBLIC_BASE_PATH?.trim().replace(/\/$/, "") ?? "";
}

export function withBasePath(path: string): string {
  if (!path.startsWith("/")) throw new Error("Site paths must start with '/'.");
  return `${getBasePath()}${path}`;
}

export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configured) return `${siteConfig.defaultOrigin}${getBasePath()}`;
  try {
    const url = new URL(configured);
    if (url.protocol !== "http:" && url.protocol !== "https:") return `${siteConfig.defaultOrigin}${getBasePath()}`;
    return `${url.origin}${url.pathname.replace(/\/$/, "")}`;
  } catch {
    return `${siteConfig.defaultOrigin}${getBasePath()}`;
  }
}

export function getAbsoluteUrl(path: string): string {
  if (!path.startsWith("/")) throw new Error("Site paths must start with '/'.");
  return `${getSiteUrl()}${path}`;
}

export function getContactEmail(): string | null {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
  return email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? email : null;
}
