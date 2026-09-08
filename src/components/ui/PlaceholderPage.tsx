import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { ArrowRightIcon } from "@/components/ui/icons";

export function PlaceholderPage({
  icon: Icon,
  eyebrow,
  title,
  description,
  primaryHref = "/",
  primaryLabel = "Ana səhifəyə qayıt",
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  eyebrow: string;
  title: string;
  description: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface text-cyan">
        <Icon width={26} height={26} />
      </span>
      <span className="mb-3 text-xs font-medium text-text-faint">
        {eyebrow}
      </span>
      <h1 className="text-balance font-display text-2xl font-semibold sm:text-3xl">
        {title}
      </h1>
      <p className="mt-3 max-w-md text-balance text-sm leading-relaxed text-text-muted sm:text-base">
        {description}
      </p>
      <Link
        href={primaryHref}
        className="mt-8 inline-flex items-center gap-2 rounded-lg bg-text px-5 py-3 text-sm font-medium text-bg transition-transform hover:opacity-90 active:scale-[0.98]"
      >
        {primaryLabel}
        <ArrowRightIcon width={16} height={16} />
      </Link>
    </section>
  );
}
