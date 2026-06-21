import type { Metadata } from "next";
import { baseUrl, brandIcons, siteName } from "@/lib/brand-metadata";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  applicationName: siteName,
  icons: brandIcons,
  verification: {
    google: "OhTBrzwg9OprrFzPrNaT-S--4-JGrqvmVbk7EAz9SAw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
