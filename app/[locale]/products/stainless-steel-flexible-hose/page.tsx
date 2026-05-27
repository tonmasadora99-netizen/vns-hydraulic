import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import ProductMenu from "@/components/about/ProductMenu";
import StainlessSteelFlexibleHoseIntro from "@/components/products/StainlessSteelFlexibleHose/StainlessSteelFlexibleHoseIntro";
import StainlessSteelFlexibleHoseSpecTable from "@/components/products/StainlessSteelFlexibleHose/StainlessSteelFlexibleHoseSpecTable";
import StainlessSteelFlexibleHoseDetail from "@/components/products/StainlessSteelFlexibleHose/StainlessSteelFlexibleHoseDetail";
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
    title: t("stainlessFlexibleTitle"),
    description: t("stainlessFlexibleDescription"),
    alternates: {
      canonical: `${baseUrl}/${locale}/products/stainless-steel-flexible-hose`,
      languages: { th: `${baseUrl}/th/products/stainless-steel-flexible-hose`, en: `${baseUrl}/en/products/stainless-steel-flexible-hose`, "x-default": `${baseUrl}/th/products/stainless-steel-flexible-hose` },
    },
  };
}

export default function StainlessSteelFlexibleHosePage() {
  return (
    <div className="min-h-screen bg-[#f7f7f6] text-black overflow-x-hidden">
      {/* Container for Side-by-Side Layout */}
      <div className="mx-auto max-w-[1400px] px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[350px_1fr]">
          {/* Left Sidebar Menu */}
          <aside className="hidden md:block">
            <ProductMenu />
          </aside>

          {/* Right Content Area */}
          <div className="flex flex-col gap-8">
            
            {/* 1. Custom Options (Flanges & Fittings) - MOVED TO TOP */}
            <main id="custom-options" className="rounded-2xl bg-white p-4 shadow-xl md:p-8 lg:p-12 scroll-mt-24">
              <StainlessSteelFlexibleHoseDetail />
            </main>

            {/* 2. General Introduction */}
            <section id="intro" className="rounded-2xl bg-white p-4 shadow-xl md:p-8 lg:p-12 border-t border-zinc-100 scroll-mt-24">
              <StainlessSteelFlexibleHoseIntro />
            </section>

          </div>
        </div>
      </div>

      {/* 3. Technical Spec Table (Separator) */}
      <div id="specs" className="mt-12 scroll-mt-24">
        <StainlessSteelFlexibleHoseSpecTable />
      </div>

      {/* Footer Contact Section */}
      <div className="mt-12">
        <ContactSection />
      </div>
    </div>
  );
}
