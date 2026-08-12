import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function createPageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: siteConfig.siteName, title, description, url: path, images: [{ url: "/images/social-card.png", width: 1200, height: 630, alt: `${siteConfig.siteName} by ${siteConfig.author.name}` }] },
    twitter: { card: "summary_large_image", title, description, images: ["/images/social-card.png"] },
  };
}
