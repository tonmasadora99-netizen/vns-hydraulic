import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import ProductGrid from "@/components/Home/ProductGrid";
import ContactSection from "@/components/about/ContactSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const baseUrl = "https://vnshydraulic.com";
  return {
    title: t("productsTitle"),
    description: t("productsDescription"),
    alternates: {
      canonical: `${baseUrl}/${locale}/products`,
      languages: { th: `${baseUrl}/th/products`, en: `${baseUrl}/en/products`, "x-default": `${baseUrl}/th/products` },
    },
  };
}

export default function ProductsPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Product Page replaced with Product Grid */}
      <ProductGrid />

      {/* Contact Section at the bottom */}
      <ContactSection />
    </div>
  );
}
