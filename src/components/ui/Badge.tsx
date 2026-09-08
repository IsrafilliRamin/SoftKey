import type { ReactNode } from "react";
import clsx from "clsx";

type BadgeTone = "gold" | "cyan" | "violet" | "rose" | "neutral";

const toneClasses: Record<BadgeTone, string> = {
  gold: "bg-gold/15 text-gold border-gold/30",
  cyan: "bg-cyan/15 text-cyan border-cyan/30",
  violet: "bg-violet/15 text-violet border-violet/30",
  rose: "bg-rose/15 text-rose border-rose/30",
  neutral: "bg-surface-2 text-text-muted border-border-strong",
};

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-xs font-medium",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
