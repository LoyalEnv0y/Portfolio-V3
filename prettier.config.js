/** @type {import("prettier").Config} */
const config = {
	plugins: ['prettier-plugin-tailwindcss'],
	printWidth: 84,
	useTabs: true,
	tabWidth: 4,
	semi: true,
	singleQuote: true,
	quoteProps: "as-needed",
	jsxSingleQuote: false,
	trailingComma: "es5",
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: 'always',
	endOfLine: "crlf"
};

export default config;