import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Excel Pro GH | Websites, Excel Automation & Data Solutions in Ghana",
  description:
    "We build automated, offline‑friendly business systems for SMEs and entrepreneurs — from e‑commerce sites to Excel automation, data cleaning, and support teams.",
  keywords: [
    "Excel automation Ghana",
    "website development Ghana",
    "data cleaning",
    "business systems",
    "Accra",
  ],
  openGraph: {
    title: "Excel Pro GH | Websites & Excel Systems",
    description:
      "Save time and grow your business with automated websites and Excel systems.",
    url: "https://excelprogh.vercel.app",
    siteName: "Excel Pro GH",
    locale: "en_GH",
    type: "website",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RWN8J9ZMG4"
          strategy="afterInteractive"
        />
        <Script id="ga-excelpro" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RWN8J9ZMG4');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
