// Tətbiqin əsas domen tipləri.
// Real backend qoşulanda bu tiplər API cavablarının "contract"ı kimi qalacaq.

export type CategorySlug =
  | "emeliyyat-sistemleri"
  | "ofis"
  | "antivirus"
  | "dizayn"
  | "oyun"
  | "bulud-vpn";

export interface Category {
  id: string;
  slug: CategorySlug;
  name: string;
  description: string;
  icon: "shield" | "windows" | "office" | "brush" | "gamepad" | "cloud";
  productCount: number;
}

export type DeliveryType = "ani" | "email" | "manual";

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  categorySlug: CategorySlug;
  shortDescription: string;
  price: number;
  oldPrice?: number;
  currency: "AZN";
  rating: number;
  reviewCount: number;
  stock: number;
  delivery: DeliveryType;
  badge?: "yeni" | "trend" | "endirim" | "son-hebler";
  accent: "gold" | "cyan" | "violet" | "rose";
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export interface ApiListResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
}

export interface ApiError {
  error: {
    code: string;
    message: string;
  };
}
