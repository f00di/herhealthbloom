import type { Metadata, Viewport } from "next";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { JsonLd } from "@/components/seo/json-ld";
import { getSiteOrigin, siteConfig } from "@/config/site";
import "@/styles/globals.css";

export const viewport: Viewport = { width: "device-width", initialScale: 1, colorScheme: "light", themeColor: "#fbfaf7" };

export const metadata: Metadata = {
  metadataBase: new URL(getSiteOrigin()),
  title: { default: `${siteConfig.siteName} | ${siteConfig.author.name}`, template: `%s | ${siteConfig.author.name}` },
  description: siteConfig.siteDescription,
  applicationName: siteConfig.siteName,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: siteConfig.siteName, title: siteConfig.siteName, description: siteConfig.siteDescription, images: [{ url: "/images/social-card.png", width: 1200, height: 630, alt: `${siteConfig.siteName} by ${siteConfig.author.name}` }] },
  twitter: { card: "summary_large_image", title: siteConfig.siteName, description: siteConfig.siteDescription, images: ["/images/social-card.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const origin = getSiteOrigin();
  return <html lang="en"><body>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <SiteHeader />
    <main id="main-content" tabIndex={-1}>{children}</main>
    <SiteFooter />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", name: siteConfig.siteName, description: siteConfig.siteDescription, url: origin, author: { "@type": "Person", name: siteConfig.author.name, honorificSuffix: siteConfig.author.credentials, jobTitle: siteConfig.author.role } }} />
  </body></html>;
}
