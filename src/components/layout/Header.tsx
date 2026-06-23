"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BrandLockup } from "@/components/brand/BrandLockup";
import { useScrolled } from "@/hooks/useScrolled";
import { brand } from "@/lib/brand";
import { PAGE_CONTAINER } from "@/lib/layout";
import { NAV_LINKS } from "@/lib/site-content";

const navLinkClass = (scrolled: boolean) =>
  [
    "font-nav text-[11px] font-medium uppercase tracking-[0.16em] transition-colors duration-200",
    scrolled
      ? "text-[#8A8A8A] hover:text-[#6DC200]"
      : "text-white/55 hover:text-[#FFD84D]",
  ].join(" ");

export function Header() {
  const scrolled = useScrolled(80);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-black/6 bg-white/97 shadow-sm backdrop-blur-md"
          : "bg-gradient-to-b from-black/50 via-black/20 to-transparent"
      }`}
    >
      <div className={`${PAGE_CONTAINER} flex h-16 items-center justify-between gap-4`}>
        <BrandLockup variant="header" scrolled={scrolled} priority />

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className={navLinkClass(scrolled)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#muestra"
            className={`font-nav text-[11px] font-medium uppercase tracking-[0.14em] transition-colors duration-200 ${
              scrolled
                ? "text-[#8A8A8A] hover:text-[#FF5C00]"
                : "text-white/50 hover:text-white/85"
            }`}
          >
            Muestra gratis
          </a>
          <a
            href="#presupuesto"
            className="font-nav rounded-full px-5 py-2.5 text-[11px] font-bold uppercase tracking-[0.08em] text-black transition-all duration-200 hover:scale-105"
            style={{ background: brand.lemon }}
          >
            Pedir presupuesto
          </a>
        </div>

        <button
          type="button"
          className={`md:hidden ${scrolled ? "text-[#0D0D0D]" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className={`${PAGE_CONTAINER} flex flex-col gap-4 border-t border-black/6 bg-white py-5 md:hidden`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-nav text-[11px] font-medium uppercase tracking-[0.16em] text-[#8A8A8A]"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#muestra"
            className="font-nav text-[11px] font-medium uppercase tracking-[0.14em] text-[#8A8A8A]"
            onClick={() => setMobileOpen(false)}
          >
            Muestra gratis
          </a>
          <a
            href="#presupuesto"
            className="font-nav rounded-full px-5 py-3 text-center text-[11px] font-bold uppercase tracking-[0.08em] text-black"
            style={{ background: brand.lemon }}
            onClick={() => setMobileOpen(false)}
          >
            Pedir presupuesto
          </a>
        </div>
      )}
    </header>
  );
}
