import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";
import { OfficeIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Məhsullar",
  description: "Bütün proqram lisenziyaları və rəqəmsal açarlar kataloqu.",
};

// Bu səhifə hazırkı mərhələdə boşdur — yalnız naviqasiya keçidi kimi mövcuddur.
// Növbəti mərhələdə src/lib/services/product-service.ts vasitəsilə
// filtr, axtarış və səhifələmə ilə tam kataloq quraşdırılacaq.
export default function ProductsPage() {
  return (
    <PlaceholderPage
      icon={OfficeIcon}
      eyebrow="Kataloq"
      title="Tam kataloq tezliklə burada olacaq"
      description="Hazırda ana səhifədəki seçilmiş məhsullara baxa bilərsiniz. Filtr və axtarış funksiyaları ilə tam kataloq növbəti mərhələdə əlavə olunacaq."
    />
  );
}
