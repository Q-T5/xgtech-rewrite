/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{vue,js}"],
	theme: {
		extend: {
			fontFamily: {
				abezee: ["ABeeZee", "sans-serif"],
				alice: ["Alice", "serif"],
				nunito: ["Nunito", "sans-serif"],
				ubuntu: ["Ubuntu", "sans-serif"],
			},
		},
	},
	plugins: [],
};
