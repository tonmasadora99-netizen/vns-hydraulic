import type { Metadata } from "next";

export const metadata: Metadata = {
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
