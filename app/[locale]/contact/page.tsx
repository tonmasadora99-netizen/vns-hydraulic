import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
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
    title: t("contactTitle"),
    description: t("contactDescription"),
    alternates: {
      canonical: `${baseUrl}/${locale}/contact`,
      languages: { th: `${baseUrl}/th/contact`, en: `${baseUrl}/en/contact`, "x-default": `${baseUrl}/th/contact` },
    },
  };
}

export default async function ContactPage() {
  const t = await getTranslations("Contact");

  return (
    <div className="min-h-screen w-full bg-[#fcfcfb] text-slate-800 pb-16">
      <section className="mx-auto grid max-w-[1400px] gap-8 px-4 py-12 md:grid-cols-[300px_1fr] lg:px-8">
        {/* Sidebar Menu */}
        <aside className="hidden md:block">
          <div className="sticky top-6">
            <ProductMenu />
          </div>
        </aside>

        {/* Main Content */}
        <div className="pt-2">
          {/* Main Title */}
          <div className="mb-12 border-b border-slate-200 pb-4">
            <h1 className="relative inline-block text-3xl font-extrabold tracking-tight text-slate-900 after:absolute after:bottom-[-17px] after:left-0 after:h-[3px] after:w-full after:bg-[#b23131]">
              {t("pageTitle")}
            </h1>
          </div>

          {/* CONTACT US Section */}
          <div className="mx-auto max-w-[1000px]">
            <div className="text-center mb-10">
              <h2 className="mt-3 text-3xl font-black tracking-wider text-slate-900">
                {t("sectionTitle")} <span className="text-[#e61e1e]">{t("sectionHighlight")}</span>
              </h2>
            </div>

            {/* Layout Wrapper */}
            <div className="space-y-6">

              {/* Top Row: 3 Columns (Address, Phone, Email) */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

                {/* Address Card */}
                <div className="group flex flex-col items-center text-center bg-white p-8 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-[#c31a1a] transition-colors duration-300 group-hover:bg-[#c31a1a] group-hover:text-white">
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">{t("addressLabel")}</h3>
                  <p className="text-[15px] font-medium leading-relaxed text-slate-500">
                    6,122/124 Sukhumvit Road,<br />
                    Bang Mueang Subdistrict,<br />
                    Mueang District, Samut Prakan<br />
                    Province 10270
                  </p>
                </div>

                {/* Phone Card */}
                <div className="group flex flex-col items-center text-center bg-white p-8 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-[#c31a1a] transition-colors duration-300 group-hover:bg-[#c31a1a] group-hover:text-white">
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">{t("phoneLabel")}</h3>
                  <p className="flex flex-col gap-1 text-[16px] font-semibold text-slate-600">
                    <a href="tel:027598229" className="hover:text-[#c31a1a] transition-colors">02-759 8229</a>
                    <a href="tel:0818285418" className="hover:text-[#c31a1a] transition-colors">081-828-5418</a>
                  </p>
                </div>

                {/* Email Card */}
                <div className="group flex flex-col items-center text-center bg-white p-8 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-[#c31a1a] transition-colors duration-300 group-hover:bg-[#c31a1a] group-hover:text-white">
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-slate-900">{t("emailLabel")}</h3>
                  <p className="text-[14px] font-semibold text-slate-600 break-all hover:text-[#c31a1a] transition-colors">
                    <a href="mailto:vnsengineering777@gmail.com">vnsengineering777@gmail.com</a>
                  </p>
                </div>

              </div>

              {/* Bottom Row: 2 Columns Centered (Line, Facebook) */}
              <div className="flex flex-col md:flex-row justify-center gap-6">

                {/* Line Card */}
                <div className="group flex flex-col items-center text-center bg-white p-8 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 w-full md:w-[calc(33.333%-12px)]">
                  <a href="https://line.me/ti/p/~tonmasadora" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110 active:scale-95 mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#06c755] text-white shadow-md">
                      <div className="flex flex-col items-center justify-center scale-[0.85]">
                        <span className="text-[10px] font-black leading-none">LINE</span>
                        <div className="h-[2px] w-8 bg-white/30 my-[2px]" />
                        <span className="text-[10px] font-black leading-none">OFFICIAL</span>
                      </div>
                    </div>
                  </a>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">{t("lineLabel")}</h3>
                  <p className="text-[14px] font-medium text-slate-400 mb-4">{t("lineContact")}</p>
                  <a
                    href="https://line.me/ti/p/~tonmasadora"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-[#06c755] rounded-xl hover:bg-[#05b34c] transition-colors shadow-sm w-full"
                  >
                    @tonmasadora
                  </a>
                </div>

                {/* Facebook Card */}
                <div className="group flex flex-col items-center text-center bg-white p-8 rounded-2xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 w-full md:w-[calc(33.333%-12px)]">
                  <a href="https://www.facebook.com/profile.php?id=100037191445975" target="_blank" rel="noopener noreferrer" className="transition-all duration-300 hover:scale-110 active:scale-95 mb-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1877f2] text-white shadow-md">
                      <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </div>
                  </a>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">{t("facebookLabel")}</h3>
                  <p className="text-[14px] font-medium text-slate-400 mb-4">{t("facebookFollow")}</p>
                  <a
                    href="https://www.facebook.com/profile.php?id=100037191445975"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white bg-[#1877f2] rounded-xl hover:bg-[#166fe5] transition-colors shadow-sm w-full"
                  >
                    VNS Engineering
                  </a>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Form / Map Section */}
      <div className="mt-8">
        <ContactSection />
      </div>
    </div>
  );
}
