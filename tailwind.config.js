module.exports = {
	content: ["./pages/**/*.js", "./components/**/*.js"],
	theme: {
		extend: {
			backgroundImage: (theme) => ({
				"hero-pattern": "url('/img/bg.jpg')",
			}),
			fontFamily: {
				display: ['"Space Grotesk"', "sans-serif"],
				sans: ["Inter", "sans-serif"],
			},
		},
	},
	variants: {},
	plugins: [require("@tailwindcss/typography")],
}
