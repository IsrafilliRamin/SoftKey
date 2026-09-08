import { NextResponse } from "next/server";
import { categories } from "@/lib/mock-data";

// GET /api/categories
export async function GET() {
  return NextResponse.json(
    { data: categories, total: categories.length },
    {
      status: 200,
      headers: {
        "Cache-Control": "public, s-maxage=120, stale-while-revalidate=600",
      },
    }
  );
}
