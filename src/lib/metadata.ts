import type { Metadata } from "next";
import { getAbsoluteUrl, siteConfig } from "@/config/site";

export function createPageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: getAbsoluteUrl(path) },
    openGraph: { type: "website", siteName: siteConfig.siteName, title, description, url: getAbsoluteUrl(path), images: [{ url: getAbsoluteUrl("/images/home/image1.png"), width: 1536, height: 1024, alt: `${siteConfig.siteName} by ${siteConfig.author.name}` }] },
    twitter: { card: "summary_large_image", title, description, images: [getAbsoluteUrl("/images/home/image1.png")] },
  };
}
