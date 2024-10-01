import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	site: "https://moonset.work",
	markdown: {
		drafts: true,
	},
	integrations: [
		react(),
		mdx({ drafts: true }),
		sitemap(),
		tailwind(),
	],
	vite: {
		ssr: {
			noExternal: ["react-hook-form" /*, 'other-lib-you-need'*/],
		},
	},
});
