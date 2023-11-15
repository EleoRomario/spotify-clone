/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				black: {
					DEFAULT: "#121212",
					400: "#2a2a2a",
					500: "#1a1a1a",
				},
				text: "#a7a7a7",
			},
			boxShadow: {
				side: "0 6px 10px 0 rgba(0,0,0,.6)",
			},
		},
	},
	plugins: [],
};
