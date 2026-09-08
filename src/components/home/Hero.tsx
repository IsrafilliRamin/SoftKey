import Link from "next/link";
import { ArrowRightIcon, ZapIcon } from "@/components/ui/icons";
import { HeroSlider } from "./HeroSlider";

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

        <div className="hidden lg:block">
          <HeroSlider />
        </div>
      </div>
    </section>
  );
}
