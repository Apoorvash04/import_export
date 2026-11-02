import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MEGH Overseas — Fresh & Healthy",
    short_name: "MEGH",
    description: "Authentic Indian food products, sourced with care in Ahmedabad, Gujarat.",
    start_url: "/",
    display: "standalone",
    background_color: "#061b35",
    theme_color: "#073e91",
    icons: [{ src: "/icon.svg", type: "image/svg+xml", sizes: "any" }],
  };
}
