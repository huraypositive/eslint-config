/**
 * @huray/eslint-config-next
 *
 * @usage
 * ```js
 * import { defineConfig, globalIgnores } from "eslint/config";
 * import huray from '@huray/eslint-config-next';
 *
 * export default defineConfig([
 *   ...huray,
 *   globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
 * ]);
 * ```
 */

const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');
const eslintPluginImport = require('eslint-plugin-import');
const eslintPluginReact = require('eslint-plugin-react');
const prettierPluginTailwindcss = require('prettier-plugin-tailwindcss');

const nextVitals = require('eslint-config-next/core-web-vitals');
const nextTs = require('eslint-config-next/typescript');

const {
  baseRules,
  typescriptRules,
  prettierOptions,
} = require('@huray/eslint-config');

module.exports = [
  // Next.js (React, Hooks, a11y, Core Web Vitals, TypeScript 파서)
  ...nextVitals,
  ...nextTs,

  // 공통 규칙
  {
    name: 'huray/rules',
    plugins: {
      import: eslintPluginImport,
      react: eslintPluginReact,
    },
    rules: {
      ...baseRules,
      ...typescriptRules,

      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'type'],
          pathGroups: [
            { pattern: '@/lib/*', group: 'internal', position: 'after' },
            { pattern: '@/components/*', group: 'internal', position: 'after' },
            { pattern: '@{images,icon}/*', group: 'internal', position: 'before' },
          ],
          alphabetize: { order: 'asc', caseInsensitive: true },
          'newlines-between': 'always',
        },
      ],
      'import/first': ['error'],

      'react/self-closing-comp': 'error',
    },
  },

  // Prettier
  eslintPluginPrettierRecommended,

  {
    name: 'huray/prettier',
    rules: {
      'prettier/prettier': [
        'warn',
        {
          ...prettierOptions,
          plugins: [prettierPluginTailwindcss],
          tailwindFunctions: ['clsx', 'cva', 'cn'],
        },
        { usePrettierrc: true },
      ],
    },
  },

  // Ignore Patterns
  {
    name: 'huray/ignores',
    ignores: ['.next/**', 'node_modules/**', 'dist/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
];
