import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import ProductMenu from "@/components/about/ProductMenu";
import R7Hose from "@/components/products/สายR7 Thermoplastic Hose/R7Hose";
import R7SpecsTable from "@/components/products/สายR7 Thermoplastic Hose/R7SpecsTable";
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
    title: t("r7HoseTitle"),
    description: t("r7HoseDescription"),
    alternates: {
      canonical: `${baseUrl}/${locale}/products/r7-thermoplastic-hose`,
      languages: { th: `${baseUrl}/th/products/r7-thermoplastic-hose`, en: `${baseUrl}/en/products/r7-thermoplastic-hose`, "x-default": `${baseUrl}/th/products/r7-thermoplastic-hose` },
    },
  };
}

export default function R7HosePage() {
  return (
    <div className="min-h-screen bg-[#f7f7f6] text-black">
      <section className="mx-auto grid max-w-[1400px] gap-8 px-4 py-12 md:grid-cols-[350px_1fr] lg:px-8">
        {/* Left Sidebar Menu */}
        <aside className="hidden md:block">
          <ProductMenu />
        </aside>

        {/* Right Content Area */}
        <main className="flex flex-col gap-12 rounded-3xl bg-white p-2 shadow-2xl md:p-6 lg:p-8 h-fit">
          <R7Hose />
        </main>
      </section>

      {/* Full Width Specs Table Section (Separator style) */}
      <R7SpecsTable />

      <ContactSection />
    </div>


  );
}

