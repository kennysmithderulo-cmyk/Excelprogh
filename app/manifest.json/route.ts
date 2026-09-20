import { NextResponse } from "next/server";

export async function GET() {
  const manifest = {
    name: "Excel Pro GH",
    short_name: "Excel Pro GH",
    description:
      "Request websites, automation, dashboards, and business support from Excel Pro GH.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#070f26",
    theme_color: "#070f26",
    orientation: "portrait",
    categories: ["business", "productivity"],
    icons: [
      {
        src: "/profile.jpg",
        sizes: "192x192",
        type: "image/jpeg",
        purpose: "any",
      },
      {
        src: "/profile.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
      {
        src: "/profile.jpg",
        sizes: "192x192",
        type: "image/jpeg",
        purpose: "maskable",
      },
      {
        src: "/profile.jpg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "maskable",
      },
    ],
  };

  return NextResponse.json(manifest, {
    headers: {
      "Content-Type": "application/manifest+json; charset=utf-8",
    },
  });
}
