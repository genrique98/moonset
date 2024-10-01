/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"brand-purple": {
					DEFAULT: "#4343FE",
					light: "",
					dark: "",
				},
				"brand-black": {
					DEFAULT: "#171738",
					light: "#A6A6C4",
					dark: "#626285",
				},
				"brand-white": {
					DEFAULT: "#EDF0FF",
				}
			},
			// 	fontFamily: {
			// 		body: ['Manrope', ...defaultTheme.fontFamily.sans]
			// 	},
		},
	},
	plugins: [],
};
