"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store/useCartStore";
import { useUIStore } from "@/store/useUIStore";
import { ThemeToggle } from "./ThemeToggle";
import { CartIcon, KeyLogoIcon, MenuIcon, UserIcon } from "@/components/ui/icons";
import clsx from "clsx";

const navLinks = [
  { href: "/", label: "Ana səhifə" },
  { href: "/products", label: "Məhsullar" },
  { href: "/about", label: "Haqqımızda" },
  { href: "/contact", label: "Əlaqə" },
  { href: "/faq", label: "SSS" },
];

export function Header() {
  const pathname = usePathname();
  const totalItems = useCartStore((s) => s.totalItems());
  const openCart = useCartStore((s) => s.openCart);
  const toggleMobileMenu = useUIStore((s) => s.toggleMobileMenu);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur supports-[backdrop-filter]:bg-bg/70">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold to-cyan text-[#08080d]">
            <KeyLogoIcon width={19} height={19} strokeWidth={2} />
          </span>
          <span className="font-display text-lg font-semibold tracking-tight">
            Soft<span className="text-gold">Key</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-text"
                    : "text-text-muted hover:text-text"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            aria-label="Hesab"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text-muted transition-colors hover:border-border-strong hover:text-text"
          >
            <UserIcon width={18} height={18} />
          </Link>

          <ThemeToggle />

          <button
            onClick={openCart}
            aria-label="Səbəti aç"
            className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text-muted transition-colors hover:border-border-strong hover:text-text"
          >
            <CartIcon width={18} height={18} />
            {totalItems > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-[#08080d]">
                {totalItems}
              </span>
            )}
          </button>

          <button
            onClick={toggleMobileMenu}
            aria-label="Menyunu aç"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-text-muted transition-colors hover:border-border-strong hover:text-text lg:hidden"
          >
            <MenuIcon width={18} height={18} />
          </button>
        </div>
      </div>
    </header>
  );
}
