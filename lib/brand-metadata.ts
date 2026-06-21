import type { Metadata } from "next";

export const baseUrl = "https://vnshydraulic.com";
export const siteName = "V.N.S. Engineering Hydraulic";
export const logoUrl = "/vns-logo.png?v=3";
export const ogImageUrl = "/vns-og-image.png?v=3";

export const brandIcons: Metadata["icons"] = {
  icon: [
    { url: "/favicon.ico?v=3", sizes: "any" },
    { url: "/icon.png?v=3", type: "image/png", sizes: "512x512" },
    { url: logoUrl, type: "image/png", sizes: "512x512" },
  ],
  shortcut: "/favicon.ico?v=3",
  apple: [{ url: "/apple-icon.png?v=3", type: "image/png", sizes: "180x180" }],
};

