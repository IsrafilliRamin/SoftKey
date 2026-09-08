import Link from "next/link";
import { ArrowRightIcon } from "@/components/ui/icons";

export function CtaBanner() {
  return (
    <section className="py-16">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-2xl border border-border-strong bg-surface px-6 py-12 text-center sm:px-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-80"
            style={{
              background:
                "radial-gradient(480px circle at 15% -10%, color-mix(in srgb, var(--color-gold) 18%, transparent), transparent 60%), radial-gradient(480px circle at 90% 120%, color-mix(in srgb, var(--color-cyan) 18%, transparent), transparent 60%)",
            }}
          />
          <div className="relative">
            <h2 className="text-balance font-display text-2xl font-semibold sm:text-3xl">
              Hesab yarat, sifarişlərini bir yerdə izlə.
            </h2>
            <p className="mx-auto mt-3 max-w-md text-balance text-sm text-text-muted sm:text-base">
              Qeydiyyat funksiyası tezliklə aktiv olacaq — indi kataloqu
              nəzərdən keçir və sifarişə hazır ol.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-lg bg-text px-5 py-3 text-sm font-medium text-bg transition-transform hover:opacity-90 active:scale-[0.98]"
              >
                Qeydiyyatdan keç
                <ArrowRightIcon width={16} height={16} />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium transition-colors hover:border-border-strong"
              >
                Kataloqa bax
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
