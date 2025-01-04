module.exports = {
  rules: { "character-reference": false },
  parser: {
    ".astro$": "@markuplint/astro-parser",
    ".[jt]sx$": "@markuplint/jsx-parser",
  },
  specs: {
    ".[jt]sx$": "@markuplint/react-spec",
  },
  extends: ["markuplint:recommended", "markuplint:recommended-react"],
  pretenders: [
    {
      selector: "Head",
      as: {
        element: "head",
      },
    },
  ],
  nodeRules: [
    {
      selector: "head",
      rules: {
        "permitted-contents": false,
        "required-element": false,
      },
    },
  ],
};
