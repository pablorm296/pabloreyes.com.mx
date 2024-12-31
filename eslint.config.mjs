import eslintPluginAstro from 'eslint-plugin-astro';

/** @type {import("eslint").ESLint.ConfigData} */
export default [
    ...eslintPluginAstro.configs.recommended,
    {
        rules: {

        }
    }
];