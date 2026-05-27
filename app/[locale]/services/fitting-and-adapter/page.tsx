import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import FittingAndAdapter from "@/components/Home/Services/FittingAndAdapter";
import ProductMenu from "@/components/about/ProductMenu";
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
    title: t("fittingAdapterTitle"),
    description: t("fittingAdapterDescription"),
    alternates: {
      canonical: `${baseUrl}/${locale}/services/fitting-and-adapter`,
      languages: { th: `${baseUrl}/th/services/fitting-and-adapter`, en: `${baseUrl}/en/services/fitting-and-adapter`, "x-default": `${baseUrl}/th/services/fitting-and-adapter` },
    },
  };
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#dcdcdc] pt-24">
      <div className="mx-auto max-w-[1400px] px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[380px_1fr] lg:items-start">
          {/* Left Sidebar - Menu */}
          <div className="lg:sticky lg:top-28 order-2 lg:order-1">
            <ProductMenu />
          </div>

          {/* Right Content - Main */}
          <div className="bg-white/40 backdrop-blur-sm rounded-[3rem] p-4 shadow-inner order-1 lg:order-2">
            <FittingAndAdapter />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-20">
        <ContactSection />
      </div>
    </main>
  );
}
