import Link from "next/link";
import type { Category } from "@/lib/types";
import { categoryIconMap } from "@/components/ui/icons";

export function CategoryStrip({ categories }: { categories: Category[] }) {
  return (
    <section className="border-b border-border py-12">
      <div className="container-page">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="font-display text-xl font-semibold sm:text-2xl">
            Kateqoriyalar
          </h2>
          <Link
            href="/products"
            className="text-sm font-medium text-text-muted transition-colors hover:text-text"
          >
            Hamısına bax
          </Link>
        </div>

        <div className="-mx-5 flex gap-3 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:px-0 lg:grid-cols-6">
          {categories.map((category) => {
            const Icon = categoryIconMap[category.icon];
            return (
              <Link
                key={category.id}
                href={`/products?category=${category.slug}`}
                className="group flex min-w-[210px] items-center gap-3 rounded-xl border border-border bg-surface p-4 transition-colors hover:border-border-strong md:min-w-0"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-2 text-text transition-colors group-hover:text-cyan">
                  <Icon width={20} height={20} />
                </span>
                <span>
                  <span className="block text-sm font-medium text-text">
                    {category.name}
                  </span>
                  <span className="mt-0.5 block text-xs text-text-faint">
                    {category.productCount} məhsul
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
