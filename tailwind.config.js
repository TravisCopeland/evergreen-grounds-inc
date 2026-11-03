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
				page: "rgb(var(--color-page) / <alpha-value>)",
				surface: "rgb(var(--color-surface) / <alpha-value>)",
				"surface-raised": "rgb(var(--color-surface-raised) / <alpha-value>)",
				border: "rgb(var(--color-border) / <alpha-value>)",
				"content-primary": "rgb(var(--color-content-primary) / <alpha-value>)",
				"content-muted": "rgb(var(--color-content-muted) / <alpha-value>)",
				brand: "rgb(var(--color-brand) / <alpha-value>)",
				"brand-hover": "rgb(var(--color-brand-hover) / <alpha-value>)",
				"brand-light": "rgb(var(--color-brand-light) / <alpha-value>)",
				"brand-deep": "rgb(var(--color-brand-deep) / <alpha-value>)",
				"brand-foreground":
					"rgb(var(--color-brand-foreground) / <alpha-value>)",
				danger: "rgb(var(--color-danger) / <alpha-value>)",
				field: "rgb(var(--color-field) / <alpha-value>)",
				"field-content": "rgb(var(--color-field-content) / <alpha-value>)",
			},
			fontFamily: {
				sans: ["Poppins", "sans-serif"],
			},
			boxShadow: {
				card: "var(--shadow-card)",
			},
		},
	},
	plugins: [],
};
