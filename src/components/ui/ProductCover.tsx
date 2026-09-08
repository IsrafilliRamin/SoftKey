import Image from "next/image";
import { categoryIconMap } from "./icons";
import type { CategorySlug, Product } from "@/lib/types";

const categoryToIcon: Record<CategorySlug, keyof typeof categoryIconMap> = {
  "emeliyyat-sistemleri": "windows",
  ofis: "office",
  antivirus: "shield",
  dizayn: "brush",
  oyun: "gamepad",
  "bulud-vpn": "cloud",
};

const accentGradients: Record<Product["accent"], string> = {
  gold: "from-gold/25 via-gold/5 to-transparent",
  cyan: "from-cyan/25 via-cyan/5 to-transparent",
  violet: "from-violet/25 via-violet/5 to-transparent",
  rose: "from-rose/25 via-rose/5 to-transparent",
};

const accentText: Record<Product["accent"], string> = {
  gold: "text-gold",
  cyan: "text-cyan",
  violet: "text-violet",
  rose: "text-rose",
};

export function ProductCover({ product }: { product: Product }) {
  if (product.image) {
    return (
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-xl bg-surface-2">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  const Icon = categoryIconMap[categoryToIcon[product.categorySlug]];

  return (
    <div
      className={`relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-t-xl bg-gradient-to-br ${accentGradients[product.accent]} bg-surface-2`}
    >
      <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-current opacity-10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-current opacity-10 blur-2xl" />
      <Icon
        width={56}
        height={56}
        strokeWidth={1.3}
        className={`${accentText[product.accent]} opacity-90`}
      />
      <span className="absolute bottom-2.5 left-3 text-xs font-medium text-text-faint">
        {product.brand}
      </span>
    </div>
  );
}
