/**
 * @huray/eslint-config-react
 *
 * @usage
 * ```js
 * import { defineConfig, globalIgnores } from "eslint/config";
 * import huray from '@huray/eslint-config-react';
 *
 * export default defineConfig([
 *   ...huray,
 *   globalIgnores(["dist/**", "build/**"]),
 * ]);
 * ```
 */

const tsEslintPlugin = require('@typescript-eslint/eslint-plugin');
const tsEslintParser = require('@typescript-eslint/parser');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const eslintPluginReact = require('eslint-plugin-react');
const eslintPluginReactHooks = require('eslint-plugin-react-hooks');
const eslintPluginJsxA11y = require('eslint-plugin-jsx-a11y');

const {
  baseRules,
  typescriptRules,
  prettierOptions,
} = require('@huray/eslint-config');

module.exports = [
  // 기본 규칙 (React + Hooks + a11y)
  {
    name: 'huray/base',
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      'jsx-a11y': eslintPluginJsxA11y,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      ...baseRules,
      'react/self-closing-comp': 'error',
    },
  },

  // TypeScript
  {
    name: 'huray/typescript',
    files: ['**/*.{ts,tsx,mts,cts}'],
    languageOptions: {
      parser: tsEslintParser,
      parserOptions: { project: true },
    },
    plugins: {
      '@typescript-eslint': tsEslintPlugin,
    },
    rules: typescriptRules,
  },

  // Prettier
  eslintPluginPrettierRecommended,

  {
    name: 'huray/prettier',
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
    rules: {
      'prettier/prettier': [
        'warn',
        prettierOptions,
        { usePrettierrc: false },
      ],
    },
  },

  // Ignore Patterns
  {
    name: 'huray/ignores',
    ignores: ['node_modules/**', 'dist/**', 'build/**'],
  },
];
