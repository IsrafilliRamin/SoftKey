import { categories, getCategoryBySlug } from "@/lib/mock-data";
import type { Category, CategorySlug } from "@/lib/types";

export async function listCategories(): Promise<Category[]> {
  return categories;
}

export async function getCategory(slug: CategorySlug): Promise<Category | null> {
  return getCategoryBySlug(slug) ?? null;
}
