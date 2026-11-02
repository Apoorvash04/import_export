import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.meghfoods.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MEGH Overseas | Authentic Indian Food Exporter from Ahmedabad",
    template: "%s | MEGH Overseas",
  },
  description:
    "Discover MEGH Overseas: authentic Indian food products sourced with care in Ahmedabad, Gujarat, and brought to tables around the world.",
  applicationName: "MEGH Overseas",
  keywords: [
    "Indian food exporter",
    "food exporter Ahmedabad",
    "Indian food products",
    "Indian food export partner",
    "MEGH Overseas",
  ],
  authors: [{ name: "MEGH Overseas Private Limited" }],
  creator: "MEGH Overseas Private Limited",
  publisher: "MEGH Overseas Private Limited",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "MEGH Overseas",
    title: "MEGH Overseas | Rooted in India. Loved Worldwide.",
    description:
      "Indian food products, sourced with care in Ahmedabad and shared with tables around the world.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MEGH Overseas — rooted in India, loved worldwide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEGH Overseas | Rooted in India. Loved Worldwide.",
    description: "Authentic Indian food products, sourced with care in Ahmedabad, Gujarat.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  category: "Food export",
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION } : undefined,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#073e91",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body>{children}</body>
    </html>
  );
}
