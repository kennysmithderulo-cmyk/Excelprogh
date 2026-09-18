import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Excel Pro GH",
    short_name: "Excel Pro GH",
    description:
      "Request websites, automation, dashboards, and business support from Excel Pro GH.",
    start_url: "/",
    display: "standalone",
    background_color: "#070f26",
    theme_color: "#070f26",
    orientation: "portrait",
    categories: ["business", "productivity"],
    icons: [
      {
        src: "/profile.jpg?v=2",
        sizes: "192x192",
        type: "image/jpeg",
        purpose: "any",
      },
      {
        src: "/profile.jpg?v=2",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
