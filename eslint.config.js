const js = require("@eslint/js");

module.exports = [
  {
    ignores: ["node_modules/**", "js/md5.js"],
  },

  {
    files: ["eslint.config.js"],
    languageOptions: {
      globals: {
        require: "readonly",
        module: "readonly"
      }
    }
  },

  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: {
        document: "readonly",
        window: "readonly",
        XMLHttpRequest: "readonly"
      }
    },
    ...js.configs.recommended,
    rules: {
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  }
];