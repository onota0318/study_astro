// @ts-check
// TODO: React Rules
/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
    root: true,
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "plugin:astro/recommended",
      "plugin:react/recommended",
      "prettier",
    ],
    env: {
      browser: true,
      node: true,
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: [
      "react",
      "@typescript-eslint",
    ],
    rules: {
      "no-undef": "off",
    },
    ignorePatterns: ["node_modules", "dist"],
    overrides: [
      {
        files: ["*.astro"],
        parser: "astro-eslint-parser",
        parserOptions: {
          parser: "@typescript-eslint/parser",
          extraFileExtensions: [".astro"],
        },
      },
      {
        files: "*.cjs",
        env: {
          node: true,
        },
        rules: {
          "@typescript-eslint/no-var-requires": "off",
        },
      },
    ],
  };