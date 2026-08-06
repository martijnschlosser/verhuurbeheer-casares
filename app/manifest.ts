import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Verhuurbeheer Casares",
    short_name: "VBE Casares",
    description: "Fullservice verhuurbeheer en vastgoedbeheer in Casares en aan Casares Costa.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#071d3a",
    lang: "nl",
    icons: [{ src: "/vbs-logo-casares.webp", sizes: "640x640", type: "image/webp" }],
  };
}
