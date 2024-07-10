/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				zinc: "#27272a",
				lime: "#65a30d",
				"lime-dark": "#4d7c0f",
			},
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},
			gridTemplateColumns: {
				"70/30": "70% 28%",
			},
		},
	},
	plugins: [],
};
