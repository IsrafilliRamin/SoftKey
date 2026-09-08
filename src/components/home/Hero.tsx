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

      <div className="container-page relative grid gap-10 py-16 md:py-20 lg:grid-cols-[3fr_7fr] lg:items-center lg:py-24">
        <div>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-text-muted">
            <ZapIcon width={13} height={13} className="text-gold" />
            Ödənişdən 90 saniyə sonra açarınız qutudadır
          </span>

          <h1 className="text-balance font-display text-2xl font-semibold leading-[1.15] tracking-tight text-text sm:text-3xl">
            Proqram lisenziyaları, gizli ödəniş yoxdur, sadəcə açar.
          </h1>

          <p className="mt-4 text-balance text-sm leading-relaxed text-text-muted sm:text-base">
            Windows, Office, antivirus, dizayn və oyun açarlarını rəsmi
            qiymətlərdən əlverişli əldə edin — sifarişdən dərhal sonra
            e-poçtunuza və hesabınıza rəqəmsal təhvil verilir.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-lg bg-text px-4 py-2.5 text-sm font-medium text-bg transition-transform hover:opacity-90 active:scale-[0.98]"
            >
              Məhsullara bax
              <ArrowRightIcon width={16} height={16} />
            </Link>
            <a
              href="#nece-isleyir"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium text-text transition-colors hover:border-border-strong"
            >
              Necə işləyir?
            </a>
          </div>

          <dl className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-5">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-base font-semibold text-text sm:text-lg">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-[11px] text-text-muted sm:text-xs">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <HeroSlider />
        </div>
      </div>
    </section>
  );
}
