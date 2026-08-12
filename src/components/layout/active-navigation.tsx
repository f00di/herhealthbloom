"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNavigation } from "@/config/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function DesktopNavigation() {
  const pathname = usePathname();
  return (
    <nav className="desktop-nav" aria-label="Primary navigation">
      <ul>
        {primaryNavigation.map((item) => (
          <li key={item.href}>
            <Link href={item.href} aria-current={isActive(pathname, item.href) ? "page" : undefined}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
