import eslint from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export default [
	eslint.configs.recommended,
	{
		files: ["**/*.{js,jsx}"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			parserOptions: {
				ecmaFeatures: {
					jsx: true
				}
			},
			globals: {
				...reactPlugin.configs.recommended.globals,
				document: "writable",
				console: "writable",
				setInterval: "writable",
				clearInterval: "writable"
			}
		},
		plugins: {
			react: reactPlugin,
			"react-hooks": reactHooksPlugin,
			"jsx-a11y": jsxA11yPlugin,
			import: importPlugin
		},
		settings: {
			react: {
				version: "detect"
			},
			"import/resolver": {
				alias: {
					map: [
						["@components", "./src/components"] // Adjust alias mapping
					],
					extensions: [".js", ".jsx", ".ts", ".tsx"] // Add the relevant extensions
				}
			}
		},
		rules: {
			// React specific rules
			"react/jsx-no-undef": "error",
			"react/jsx-uses-react": "error",
			"react/jsx-uses-vars": "error",
			// "react/prop-types": "error",
			"react/react-in-jsx-scope": "off", // Not needed with React 17+
			"react/jsx-key": ["error", { checkFragmentShorthand: true }],
			"react/jsx-no-duplicate-props": "error",
			"react/no-children-prop": "error",
			"react/no-danger": "warn",
			"react/no-deprecated": "error",
			"react/no-direct-mutation-state": "error",
			"react/jsx-pascal-case": "error",
			"react/self-closing-comp": "warn",

			// React Hooks rules
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "warn",

			// JSX Accessibility
			"jsx-a11y/alt-text": "error",
			"jsx-a11y/aria-role": "error",
			"jsx-a11y/aria-props": "error",
			"jsx-a11y/aria-unsupported-elements": "error",
			"jsx-a11y/role-has-required-aria-props": "error",

			// Import rules
			"import/no-unresolved": "error",
			"import/named": "error",
			"import/default": "error",
			"import/no-named-as-default-member": "warn",
			"import/no-duplicates": "error",
			"import/order": [
				"warn",
				{
					groups: [
						"builtin",
						"external",
						"internal",
						"parent",
						"sibling",
						"index"
					],
					"newlines-between": "always",
					alphabetize: { order: "asc", caseInsensitive: true }
				}
			],

			// General JavaScript rules
			"no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
			"no-console": "warn",
			"prefer-const": "warn",
			"no-var": "error",
			eqeqeq: "error"
		}
	},
	// Apply overrides for specific file patterns if needed
	{
		files: ["**/vite.config.{js,ts}"],
		rules: {
			"no-console": "off"
		}
	}
];
