import type { MetadataRoute } from "next";
import { getAbsoluteUrl, getSiteUrl } from "@/config/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  return { rules: { userAgent: "*", allow: "/" }, sitemap: getAbsoluteUrl("/sitemap.xml"), host: new URL(siteUrl).origin };
}
