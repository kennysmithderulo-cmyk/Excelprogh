import "./globals.css";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Excel Pro GH | Kenny Murray - 7 Systems - Ghana",
  description:
    "We build business systems: automated, offline, no subscription — from data cleaning that saves 96% time (4hrs → 12min) to e-commerce websites & 24/7 customer support teams. 📧 Email:contact.excelprogh@gmail.com 📞 Phone/WhatsApp: +233 548097756",
  keywords: [
    "Excel automation Ghana",
    "website development Ghana",
    "data cleaning",
    "business systems",
    "Accra",
  ],
  manifest: "/manifest.json",
  verification: {
    google: "I6wBAERuML0GEQrEUsR6XUw-z8BPUTvVP_w6NBfjciY",
  },
  openGraph: {
    title: "Excel Pro GH | Websites & Excel Systems",
    description:
      "Save time and grow your business with automated websites and Excel systems.",
    url: "https://excelprogh.vercel.app",
    siteName: "Excel Pro GH",
    locale: "en_GH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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

            function gtag() {
              window.dataLayer.push(arguments);
            }

            gtag("js", new Date());
            gtag("config", "G-RWN8J9ZMG4");
          `}
        </Script>
      </head>

      <body className="bg-white text-[#070f26]">
        {children}
      </body>
    </html>
  );
}
