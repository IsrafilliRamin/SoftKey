import { NextRequest, NextResponse } from "next/server";
import { getProductBySlug } from "@/lib/mock-data";

// GET /api/products/[slug]
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return NextResponse.json(
      { error: { code: "NOT_FOUND", message: "Məhsul tapılmadı." } },
      { status: 404 }
    );
  }

  return NextResponse.json(product, {
    status: 200,
    headers: {
      "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
    },
  });
}
