import Link from "next/link";
import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/ui/ProductCard";

export function FeaturedProducts({ products }: { products: Product[] }) {
  return (
    <section className="border-b border-border py-14">
      <div className="container-page">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-xl font-semibold sm:text-2xl">
              Seçilmiş məhsullar
            </h2>
            <p className="mt-1.5 text-sm text-text-muted">
              Ən çox satılan və endirimli lisenziyalar
            </p>
          </div>
          <Link
            href="/products"
            className="hidden text-sm font-medium text-text-muted transition-colors hover:text-text sm:block"
          >
            Hamısına bax
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
