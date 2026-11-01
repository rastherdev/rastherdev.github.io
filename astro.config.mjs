import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://rastherdev.github.io",
  base: "/",
  integrations: [sitemap()],
  // Downloaded at build time and served from this origin; <Font /> in
  // BaseLayout preloads them (replaces the render-blocking Google @import)
  fonts: [
    {
      provider: fontProviders.google(),
      name: "DM Sans",
      cssVariable: "--font-display",
      weights: [400, 500, 700],
      styles: ["normal"],
    },
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-body",
      weights: [400, 500, 600],
      styles: ["normal"],
    },
    {
      provider: fontProviders.google(),
      name: "JetBrains Mono",
      cssVariable: "--font-mono",
      styles: ["normal"],
      fallbacks: ["monospace"],
    },
  ],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});