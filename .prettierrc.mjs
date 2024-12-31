/** @type {import("prettier").Config} */
export default {
    plugins: ["prettier-plugin-astro"],
    printWidth: 120,
    useTabs: false,
    tabWidth: 4,
    trailingComma: "es5",
    singleQuote: false,
    jsxSingleQuote: false,
    quoteProps: "consistent",
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: "avoid",
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
};
