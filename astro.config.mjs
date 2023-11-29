import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwind from '@astrojs/tailwind';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://moonset.work",
  integrations: [preact(), mdx(), sitemap(), tailwind()],
});
