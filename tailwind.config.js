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
				lime: "#11823b",
				"lime-light": "#48bf53",
				"lime-dark": "#004d25",
				"lime-shadow": "#02231c",
				"lime-shadow-dark": "#02231c",
				"error-red": "#f21e08",
			},
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [],
};
