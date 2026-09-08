import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { CategoryStrip } from "@/components/home/CategoryStrip";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { TrustFeatures } from "@/components/home/TrustFeatures";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { CtaBanner } from "@/components/home/CtaBanner";
import { listCategories } from "@/lib/services/category-service";
import { getBundleProducts } from "@/lib/services/product-service";
import { testimonials } from "@/lib/mock-data";

export const metadata: Metadata = {
  title: "Ana səhifə",
  description:
    "AçarBazar — Windows, Office, antivirus, Adobe və oyun açarlarını rəsmi qiymətlərdən ucuz, ani rəqəmsal təhvillə əldə edin.",
};

// Server komponenti: render zamanı servis qatından (hazırda fake API/mock)
// data çəkilir. Beləliklə səhifə tam SSR ilə HTML kimi çatdırılır.
export default async function HomePage() {
  const [categories, bundleProducts] = await Promise.all([
    listCategories(),
    getBundleProducts(),
  ]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AçarBazar",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://acarbazar.az",
    potentialAction: {
      "@type": "SearchAction",
      target: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://acarbazar.az"}/products?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CategoryStrip categories={categories} />
      <Hero />
      <FeaturedProducts products={bundleProducts} />
      <TrustFeatures />
      <HowItWorks />
      <Testimonials items={testimonials} />
      <CtaBanner />
    </>
  );
}
