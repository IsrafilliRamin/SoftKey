"use client";

import Link from "next/link";
import { useUIStore } from "@/store/useUIStore";
import { CloseIcon, KeyLogoIcon } from "@/components/ui/icons";

const links = [
  { href: "/", label: "Ana səhifə" },
  { href: "/products", label: "Məhsullar" },
  { href: "/about", label: "Haqqımızda" },
  { href: "/contact", label: "Əlaqə" },
  { href: "/faq", label: "SSS" },
  { href: "/login", label: "Daxil ol" },
  { href: "/register", label: "Qeydiyyat" },
];

export function MobileNav() {
  const isOpen = useUIStore((s) => s.isMobileMenuOpen);
  const close = useUIStore((s) => s.closeMobileMenu);

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
        aria-hidden="true"
      />
      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-72 flex-col bg-bg-elevated shadow-lift transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <span className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-gold to-cyan text-[#08080d]">
              <KeyLogoIcon width={16} height={16} strokeWidth={2} />
            </span>
            <span className="font-display text-base font-semibold">
              Açar<span className="text-gold">Bazar</span>
            </span>
          </span>
          <button
            onClick={close}
            aria-label="Bağla"
            className="rounded-lg p-1.5 text-text-muted hover:bg-surface-2 hover:text-text"
          >
            <CloseIcon width={18} height={18} />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-3 py-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-text-muted transition-colors hover:bg-surface-2 hover:text-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>
    </>
  );
}
