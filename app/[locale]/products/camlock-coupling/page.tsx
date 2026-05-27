import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import ProductMenu from "@/components/about/ProductMenu";
import Camlock from "@/components/products/Camlock/Camlock";
import CamlockTable from "@/components/products/Camlock/CamlockTable";
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
    title: t("camlockTitle"),
    description: t("camlockDescription"),
    alternates: {
      canonical: `${baseUrl}/${locale}/products/camlock-coupling`,
      languages: { th: `${baseUrl}/th/products/camlock-coupling`, en: `${baseUrl}/en/products/camlock-coupling`, "x-default": `${baseUrl}/th/products/camlock-coupling` },
    },
  };
}

export default function CamlockPage() {
  return (
    <div className="min-h-screen bg-[#f7f7f6] text-black overflow-x-hidden">
      <section className="mx-auto grid max-w-[1400px] gap-8 px-4 py-12 md:grid-cols-[350px_1fr] lg:px-8">
        {/* Left Sidebar Menu */}
        <aside className="hidden md:block">
          <div className="sticky top-24">
            <ProductMenu />
          </div>
        </aside>

        {/* Right Content Area */}
        <main className="flex flex-col gap-12 h-fit">
          <div className="rounded-3xl bg-white p-2 shadow-2xl md:p-6 lg:p-8">
            <Camlock />
          </div>
        </main>
      </section>

      {/* Full Width Table Section */}
      <div className="w-full">
        <CamlockTable />
      </div>

      <div className="mt-12">
        <ContactSection />
      </div>
    </div>
  );
}
