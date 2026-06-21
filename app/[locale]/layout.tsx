import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import HeroBanner from "@/components/HeroBanner";
import {
  baseUrl,
  brandIcons,
  logoUrl,
  ogImageUrl,
  siteName,
} from "@/lib/brand-metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`../../messages/${locale}.json`)).default as {
    Metadata: { homeTitle: string; homeDescription: string };
  };

  return {
    metadataBase: new URL(baseUrl),
    title: messages.Metadata.homeTitle,
    description: messages.Metadata.homeDescription,
    applicationName: siteName,
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        th: `${baseUrl}/th`,
        en: `${baseUrl}/en`,
      },
    },
    icons: brandIcons,
    openGraph: {
      type: "website",
      locale,
      siteName,
      title: messages.Metadata.homeTitle,
      description: messages.Metadata.homeDescription,
      url: `${baseUrl}/${locale}`,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: `${siteName} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: messages.Metadata.homeTitle,
      description: messages.Metadata.homeDescription,
      images: [ogImageUrl],
    },
    verification: {
      google: "OhTBrzwg9OprrFzPrNaT-S--4-JGrqvmVbk7EAz9SAw",
    },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "th" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-white selection:bg-blue-500/30 selection:text-blue-200">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <HeroBanner />
          <main className="flex-1">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
