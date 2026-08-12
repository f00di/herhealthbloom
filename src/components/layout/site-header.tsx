import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { DesktopNavigation } from "@/components/layout/active-navigation";
import { MobileNavigation } from "@/components/layout/mobile-navigation";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header-inner container">
        <Link className="brand" href="/" aria-label={`${siteConfig.siteName}, home`}>
          <span className="brand-mark" aria-hidden="true"><Image src="/images/herhealthbloom-logo.png" alt="" width={189} height={186} priority /></span>
          <span><strong>{siteConfig.author.name}</strong><small>{siteConfig.author.role}</small></span>
        </Link>
        <DesktopNavigation />
        <MobileNavigation />
      </div>
    </header>
  );
}
