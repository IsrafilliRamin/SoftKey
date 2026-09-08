"use client";

import Link from "next/link";
import type { Product } from "@/lib/types";
import { ProductCover } from "./ProductCover";
import { StarRating } from "./StarRating";
import { Badge } from "./Badge";
import { useCartStore } from "@/store/useCartStore";
import { ZapIcon } from "./icons";

const badgeLabel: Record<NonNullable<Product["badge"]>, string> = {
  yeni: "Yeni",
  trend: "Populyar",
  endirim: "Endirim",
  "son-hebler": "Son hədlər",
};

export function ProductCard({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);

  const discount = product.oldPrice
    ? Math.round(100 - (product.price / product.oldPrice) * 100)
    : null;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-border-strong">
      <Link href={`/products/${product.slug}`} className="block">
        <ProductCover product={product} />
      </Link>

      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <div className="flex items-center justify-between gap-2">
          {product.badge ? (
            <Badge tone={product.accent === "gold" ? "gold" : product.accent}>
              {badgeLabel[product.badge]}
            </Badge>
          ) : (
            <span />
          )}
          <span className="flex items-center gap-1 text-xs text-text-faint">
            <ZapIcon width={13} height={13} />
            {product.delivery === "ani" ? "Ani təhvil" : "E-poçtla"}
          </span>
        </div>

        <Link href={`/products/${product.slug}`}>
          <h3 className="text-[15px] font-semibold leading-snug text-text transition-colors group-hover:text-cyan">
            {product.name}
          </h3>
        </Link>
        <p className="line-clamp-2 text-sm text-text-muted">
          {product.shortDescription}
        </p>

        <StarRating rating={product.rating} reviewCount={product.reviewCount} />

        <div className="mt-auto flex items-end justify-between pt-2">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-semibold text-text">
                {product.price.toFixed(2)} ₼
              </span>
              {product.oldPrice && (
                <span className="text-sm text-text-faint line-through">
                  {product.oldPrice.toFixed(2)} ₼
                </span>
              )}
            </div>
            {discount && (
              <span className="text-xs font-medium text-success">
                {discount}% ucuz
              </span>
            )}
          </div>

          <button
            onClick={() => addItem(product)}
            className="rounded-lg bg-text px-3.5 py-2 text-sm font-medium text-bg transition-transform active:scale-95 hover:opacity-90"
          >
            Səbətə at
          </button>
        </div>
      </div>
    </div>
  );
}
