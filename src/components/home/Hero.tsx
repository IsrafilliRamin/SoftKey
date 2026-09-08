import Link from "next/link";
import { ArrowRightIcon, ZapIcon, CheckIcon } from "@/components/ui/icons";

const stats = [
  { value: "18,000+", label: "təhvil edilmiş açar" },
  { value: "4.8/5", label: "orta müştəri qiyməti" },
  { value: "~90 san.", label: "orta təhvil müddəti" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(700px circle at 82% 18%, color-mix(in srgb, var(--color-cyan) 16%, transparent), transparent 60%), radial-gradient(500px circle at 8% 90%, color-mix(in srgb, var(--color-gold) 14%, transparent), transparent 60%)",
        }}
      />

      <div className="container-page relative grid gap-12 py-16 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
        <div className="max-w-xl">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text-muted">
            <ZapIcon width={13} height={13} className="text-gold" />
            Ödənişdən 90 saniyə sonra açarınız qutudadır
          </span>

          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-text sm:text-5xl">
            Proqram lisenziyaları, gizli ödəniş yoxdur, sadəcə açar.
          </h1>

          <p className="mt-5 text-balance text-base leading-relaxed text-text-muted sm:text-lg">
            Windows, Office, antivirus, dizayn və oyun açarlarını rəsmi
            qiymətlərdən əlverişli əldə edin — sifarişdən dərhal sonra
            e-poçtunuza və hesabınıza rəqəmsal təhvil verilir.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg bg-text px-5 py-3 text-sm font-medium text-bg transition-transform hover:opacity-90 active:scale-[0.98]"
            >
              Məhsullara bax
              <ArrowRightIcon width={16} height={16} />
            </Link>
            <a
              href="#nece-isleyir"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-text transition-colors hover:border-border-strong"
            >
              Necə işləyir?
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-6">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-xl font-semibold text-text sm:text-2xl">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-xs text-text-muted sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto hidden aspect-square w-full max-w-md lg:block">
          <HeroKeyIllustration />
        </div>
      </div>
    </section>
  );
}

function HeroKeyIllustration() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <div
        aria-hidden="true"
        className="absolute inset-6 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "conic-gradient(from 180deg, var(--color-gold), var(--color-cyan), var(--color-violet), var(--color-gold))",
        }}
      />
      <div className="relative flex h-[86%] w-[86%] items-center justify-center rounded-[28%] border border-border-strong bg-surface/90 shadow-lift backdrop-blur">
        <svg
          viewBox="0 0 340 165"
          className="h-2/3 w-2/=3"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="keyGrad" x1="75" y1="140" x2="265" y2="70">
              <stop offset="0%" style={{ stopColor: "var(--color-gold)" }} />
              <stop offset="100%" style={{ stopColor: "var(--color-cyan)" }} />
            </linearGradient>
          </defs>
          {/* Bow: filled ring (evenodd donut) */}
          <path
            fillRule="evenodd"
            fill="url(#keyGrad)"
            d="M175,100 A45,45 0 1,0 85,100 A45,45 0 1,0 175,100 Z M157,100 A27,27 0 1,0 103,100 A27,27 0 1,0 157,100 Z"
          />
          {/* Shaft */}
          <rect x="175" y="92.5" width="95" height="15" rx="2" fill="url(#keyGrad)" />
          {/* Bit teeth */}
          <rect x="235" y="107.5" width="10" height="22.5" rx="1.5" fill="url(#keyGrad)" />
          <rect x="252.5" y="107.5" width="10" height="32.5" rx="1.5" fill="url(#keyGrad)" />
        </svg>

        <span className="absolute right-6 top-6 flex items-center gap-1.5 rounded-full bg-success/15 px-2.5 py-1 text-[11px] font-medium text-success">
          <CheckIcon width={12} height={12} />
          Doğrulanmış
        </span>
        <span className="absolute bottom-6 left-6 rounded-full border border-border bg-bg-elevated px-2.5 py-1 text-[11px] font-medium text-text-muted">
          #WIN11-●●●●-●●●●
        </span>
      </div>
    </div>
  );
}