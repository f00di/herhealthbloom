"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { primaryNavigation } from "@/config/site";
import { CloseIcon, MenuIcon } from "@/components/ui/icons";

export function MobileNavigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    const trigger = buttonRef.current;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); buttonRef.current?.focus(); }
      if (event.key === "Tab") {
        const focusable = Array.from(menuRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? []);
        const first = focusable[0];
        const last = focusable.at(-1);
        if (!first || !last) return;
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    document.body.classList.add("menu-open");
    window.addEventListener("keydown", onKey);
    return () => { document.body.classList.remove("menu-open"); window.removeEventListener("keydown", onKey); if (previous && !trigger?.contains(previous)) previous.focus(); };
  }, [open]);

  return (
    <div className="mobile-nav">
      <button ref={buttonRef} className="icon-button" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label="Open navigation menu" onClick={() => setOpen(true)}>
        <MenuIcon />
      </button>
      {open ? (
        <div className="mobile-menu-layer" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) { setOpen(false); buttonRef.current?.focus(); } }}>
          <div ref={menuRef} className="mobile-menu" id="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation menu">
            <div className="mobile-menu-top">
              <span className="eyebrow">Menu</span>
              <button ref={closeRef} className="icon-button" type="button" aria-label="Close navigation menu" onClick={() => { setOpen(false); buttonRef.current?.focus(); }}><CloseIcon /></button>
            </div>
            <nav aria-label="Mobile primary navigation">
              <ul>
                {primaryNavigation.map((item) => {
                  const active = item.href === "/" ? pathname === "/" : pathname === item.href || pathname.startsWith(`${item.href}/`);
                  return <li key={item.href}><Link href={item.href} aria-current={active ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</Link></li>;
                })}
              </ul>
            </nav>
          </div>
        </div>
      ) : null}
    </div>
  );
}
