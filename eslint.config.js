import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
  {files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "no-console": "warn",
      "no-unused-vars": "warn",
      "no-undef": "warn",
      "no-extra-semi": "warn",
      "no-unreachable": "warn",
      "no-constant-condition": "warn",
      "no-empty": "warn",
      "no-unsafe-finally": "warn",
      "no-unsafe-negation": "warn",
      "no-unsafe-optional-chaining": "warn",
      "no-unsafe-assignment": "warn",
      "no-unsafe-member-access": "warn",
      "no-unsafe-return": "warn",
      "no-unsafe-call": "warn",
      "no-unsafe-regex": "warn",
      "no-unsafe-argument": "warn",
      "no-unsafe-index": "warn",
      "no-unsafe-iteration": "warn",
      "react/jsx-no-undef": "warn",
      "react/jsx-no-useless-fragment": "warn",
      "sort-imports": ["error", {
        "ignoreCase": false,
        "ignoreDeclarationSort": false,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
        "allowSeparatedGroups": false
      }]
    }
  }
];