// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://1kanan1.github.io",
  // The React integration is used at build time only, to render the lucide-react
  // icon components into static SVG. Nothing on the page hydrates as React, so
  // no component runtime reaches the browser.
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
