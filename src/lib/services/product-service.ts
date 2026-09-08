import { products, getFeaturedProducts as _getFeaturedProducts, getBundleProducts as _getBundleProducts } from "@/lib/mock-data";
import type { Product, CategorySlug } from "@/lib/types";

// Servis qatı: server komponentləri VƏ route handler-lər eyni funksiyaları
// çağırır. Real backend qoşulanda yalnız bu faylın daxili gövdəsi
// dəyişəcək (məs. Prisma sorğusu), çağıran tərəf toxunulmaz qalacaq.

export async function listProducts(options?: {
  category?: CategorySlug;
  featured?: boolean;
  limit?: number;
}): Promise<Product[]> {
  let result = [...products];

  if (options?.category) {
    result = result.filter((p) => p.categorySlug === options.category);
  }
  if (options?.featured) {
    result = result.filter((p) => Boolean(p.badge));
  }
  if (options?.limit) {
    result = result.slice(0, options.limit);
  }

  return result;
}

export async function getProduct(slug: string): Promise<Product | null> {
  return products.find((p) => p.slug === slug) ?? null;
}

export async function getFeaturedProducts(limit = 4): Promise<Product[]> {
  return _getFeaturedProducts(limit);
}

export async function getBundleProducts(): Promise<Product[]> {
  return _getBundleProducts();
}
