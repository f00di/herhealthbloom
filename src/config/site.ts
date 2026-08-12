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
  contactEmail: null as string | null,
  socialLinks: [] as { label: string; href: string }[],
  copyright: "© 2026 Dr. Farkhanda Kashif. All rights reserved.",
  medicalDisclaimer:
    "This website provides educational and informational women's health content and is not a substitute for professional medical advice, diagnosis, or treatment.",
} as const;

export const primaryNavigation = [
  { label: "Home", href: "/" },
  { label: "Articles / Blog", href: "/articles" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy Policy & Medical Disclaimer", href: "/privacy" },
] as const;

export function getSiteOrigin(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!configured) return siteConfig.defaultOrigin;
  try {
    return new URL(configured).origin;
  } catch {
    return siteConfig.defaultOrigin;
  }
}
