import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import ProductDetail from "@/components/products/หัวสายสแตนเลส 304/ProductDetail";
import ProductSpecs from "@/components/products/หัวสายสแตนเลส 304/ProductSpecs";
import ContactSection from "@/components/about/ContactSection";
import ProductMenu from "@/components/about/ProductMenu";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const baseUrl = "https://vnshydraulic.com";
  return {
    title: t("stainless304Title"),
    description: t("stainless304Description"),
    alternates: {
      canonical: `${baseUrl}/${locale}/products/stainless-304`,
      languages: { th: `${baseUrl}/th/products/stainless-304`, en: `${baseUrl}/en/products/stainless-304`, "x-default": `${baseUrl}/th/products/stainless-304` },
    },
  };
}

export default function Stainless304Page() {
  return (
    <div className="min-h-screen w-full bg-[#f7f7f6] text-black overflow-x-hidden">
      {/* Upper Section: Menu + Product Detail */}
      <section className="mx-auto max-w-[1400px] px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[350px_1fr] lg:items-start">
          <aside className="hidden md:block">
            <ProductMenu />
          </aside>
          <main className="overflow-hidden bg-white shadow-xl ring-1 ring-black/5 rounded-2xl">
            <ProductDetail />
          </main>
        </div>
      </section>

      {/* Middle Section: Full Width Product Specs */}
      <div className="bg-white">
        <ProductSpecs />
      </div>

      {/* Global Bottom Section */}
      <ContactSection />
    </div>
  );
}
