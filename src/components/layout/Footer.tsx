import Link from "next/link";
import { KeyLogoIcon, LockIcon, ZapIcon, HeadsetIcon } from "@/components/ui/icons";

const columns = [
  {
    title: "Mağaza",
    links: [
      { href: "/products", label: "Bütün məhsullar" },
      { href: "/products?category=emeliyyat-sistemleri", label: "Əməliyyat sistemləri" },
      { href: "/products?category=ofis", label: "Ofis proqramları" },
      { href: "/products?category=oyun", label: "Oyun açarları" },
    ],
  },
  {
    title: "Dəstək",
    links: [
      { href: "/faq", label: "Tez-tez verilən suallar" },
      { href: "/contact", label: "Bizimlə əlaqə" },
      { href: "/about", label: "Haqqımızda" },
      { href: "/cart", label: "Səbətim" },
    ],
  },
  {
    title: "Hesab",
    links: [
      { href: "/login", label: "Daxil ol" },
      { href: "/register", label: "Qeydiyyatdan keç" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-elevated">
      <div className="container-page grid gap-10 py-14 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-gold to-cyan text-[#08080d]">
              <KeyLogoIcon width={19} height={19} strokeWidth={2} />
            </span>
            <span className="font-display text-lg font-semibold">
              Soft<span className="text-gold">Key</span>
            </span>
          </Link>
          <p className="max-w-xs text-sm text-text-muted">
            Rəsmi proqram lisenziyaları və rəqəmsal açarlar üçün etibarlı
            mənbə. Ani təhvil, orijinal zəmanət.
          </p>
          <div className="flex flex-col gap-2.5 text-xs text-text-faint">
            <span className="flex items-center gap-2">
              <ZapIcon width={14} height={14} /> Ani rəqəmsal təhvil
            </span>
            <span className="flex items-center gap-2">
              <LockIcon width={14} height={14} /> Təhlükəsiz ödəniş
            </span>
            <span className="flex items-center gap-2">
              <HeadsetIcon width={14} height={14} /> 7/24 dəstək
            </span>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-4 text-sm font-semibold text-text">
              {col.title}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted transition-colors hover:text-text"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-5 text-xs text-text-faint sm:flex-row">
          <p>© {new Date().getFullYear()} Soft Key. Bütün hüquqlar qorunur.</p>
          <p>Bu, nümayiş məqsədli tərtibatdır · fake API ilə işləyir</p>
        </div>
      </div>
    </footer>
  );
}
