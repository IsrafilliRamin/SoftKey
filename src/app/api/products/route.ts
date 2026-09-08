import { NextRequest, NextResponse } from "next/server";
import { listProducts } from "@/lib/services/product-service";
import type { ApiListResponse, Product, CategorySlug } from "@/lib/types";

// GET /api/products?category=&featured=&page=&pageSize=
// Hazırda servis qatı mock massivdən oxuyur. Real backend qoşulanda
// yalnız src/lib/services/product-service.ts dəyişəcək, amma cavab
// formatı (ApiListResponse) eyni qalacaq — frontend heç nə dəyişməyəcək.
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get("category") as CategorySlug | null;
  const featured = searchParams.get("featured");
  const page = Number(searchParams.get("page") ?? "1");
  const pageSize = Number(searchParams.get("pageSize") ?? "12");

  const filtered: Product[] = await listProducts({
    category: category ?? undefined,
    featured: featured === "true",
  });

  const result = filtered;
  const total = result.length;
  const start = (page - 1) * pageSize;
  const paginated = result.slice(start, start + pageSize);

  const body: ApiListResponse<Product> = {
    data: paginated,
    total,
    page,
    pageSize,
  };

  return NextResponse.json(body, {
    status: 200,
    headers: {
      // Statik mock data — qısa müddətli edge/CDN keşi.
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
    },
  });
}
