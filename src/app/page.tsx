import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileNav } from "@/components/layout/MobileNav";
import { CartDrawer } from "@/components/layout/CartDrawer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://soft-key.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Soft Key — Rəsmi proqram lisenziyaları və rəqəmsal açarlar",
    template: "%s · Soft Key",
  },
  description:
    "Windows, Office, antivirus, Adobe və oyun açarlarını rəsmi qiymətlərdən ucuz, ani rəqəmsal təhvillə əldə edin.",
  keywords: [
    "proqram lisenziyası",
    "windows açarı",
    "office açarı",
    "rəqəmsal açar",
    "antivirus lisenziyası",
    "steam kod",
  ],
  authors: [{ name: "Soft Key" }],
  openGraph: {
    type: "website",
    locale: "az_AZ",
    url: siteUrl,
    siteName: "Soft Key",
    title: "Soft Key — Rəsmi proqram lisenziyaları və rəqəmsal açarlar",
    description:
      "Windows, Office, antivirus, Adobe və oyun açarlarını rəsmi qiymətlərdən ucuz, ani rəqəmsal təhvillə əldə edin.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soft Key — Rəsmi proqram lisenziyaları",
    description:
      "Windows, Office, antivirus, Adobe və oyun açarlarını ani rəqəmsal təhvillə əldə edin.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="az"
      suppressHydrationWarning
      className={`${spaceGrotesk.variable} ${inter.variable} h-full`}
    >
      <body className="flex min-h-full flex-col antialiased">
        <ThemeProvider>
          <Header />
          <MobileNav />
          <CartDrawer />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}