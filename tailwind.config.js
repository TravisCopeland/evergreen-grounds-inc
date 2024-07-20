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
				"lime-shadow": "#3f6212",
				"lime-shadow-dark": "#365314",
				"error-red": "#f21e08",
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
