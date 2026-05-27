import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import ProductMenu from "@/components/about/ProductMenu";
import SectionText from "@/components/about/SectionText";
import ShopPhoto from "@/components/about/ShopPhoto";
import CompanyStrengths from "@/components/about/CompanyStrengths";
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
    title: t("aboutTitle"),
    description: t("aboutDescription"),
    alternates: {
      canonical: `${baseUrl}/${locale}/about`,
      languages: { th: `${baseUrl}/th/about`, en: `${baseUrl}/en/about`, "x-default": `${baseUrl}/th/about` },
    },
  };
}

export default async function AboutPage() {
  const t = await getTranslations("About");
  const services = [t("service1"), t("service2"), t("service3"), t("service4"), t("service5"), t("service6")];

  return (
    <div className="min-h-screen bg-[#f7f7f6] text-black">
      <section className="mx-auto grid max-w-[1400px] gap-8 px-4 py-8 md:grid-cols-[350px_1fr] lg:px-8">
        <aside className="hidden md:block">
          <ProductMenu />
        </aside>

        <main className="pt-1">
          <div className="mb-16 inline-block rounded-xl bg-white px-8 py-3 text-4xl font-black text-black shadow-[10px_14px_22px_rgba(0,0,0,.45)] ring-1 ring-black/10">
            {t("pageTitle")}
          </div>

          <article className="mx-auto max-w-[900px] text-center">
            <h1 className="inline-block border-b border-[#cf2f2f] px-2 pb-1 text-4xl font-black tracking-tight text-black">
              {t("companyName")}
            </h1>
            <div className="mt-9 space-y-2 text-[20px] font-medium leading-[1.38] text-black">
              <p>{t("intro1")}</p>
              <p>{t("intro2")}</p>
              <p>{t("intro3")}</p>
            </div>
          </article>

          <div className="mx-auto mt-10 grid max-w-[900px] gap-8 text-[20px] leading-[1.32] md:grid-cols-[1fr_400px] md:items-end">
            <div>
              <SectionText title={t("servicesTitle")} items={services} />
              <div className="mt-10">
                <h2 className="font-black">{t("visionTitle")}</h2>
                <p>{t("visionText")}</p>
              </div>
              <div className="mt-10">
                <h2 className="font-black">{t("missionTitle")}</h2>
                <p>•{t("mission1")}</p>
                <p>•{t("mission2")}</p>
                <p>•{t("mission3")}</p>
              </div>
            </div>
            <ShopPhoto className="mx-auto w-full max-w-[400px]" />
          </div>
        </main>
      </section>

      <CompanyStrengths />
      <ContactSection />
    </div>
  );
}
