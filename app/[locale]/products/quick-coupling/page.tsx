import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import ProductMenu from "@/components/about/ProductMenu";
import QuickCoupling from "@/components/products/QuickCoupling/QuickCoupling";
import QuickCouplingTable from "@/components/products/QuickCoupling/QuickCouplingTable";
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
    title: t("quickCouplingTitle"),
    description: t("quickCouplingDescription"),
    alternates: {
      canonical: `${baseUrl}/${locale}/products/quick-coupling`,
      languages: { th: `${baseUrl}/th/products/quick-coupling`, en: `${baseUrl}/en/products/quick-coupling`, "x-default": `${baseUrl}/th/products/quick-coupling` },
    },
  };
}

export default function QuickCouplingPage() {
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
            <QuickCoupling />
          </div>
        </main>
      </section>

      {/* Full Width Table Section */}
      <div className="w-full">
        <QuickCouplingTable />
      </div>

      <div className="mt-12">
        <ContactSection />
      </div>
    </div>
  );
}
