/**
 * @huray/eslint-config
 *
 * Huray 공통 ESLint 규칙 정의
 * 플러그인은 포함하지 않으며, 각 프레임워크 패키지에서 조립하여 사용합니다.
 *
 * @usage
 * ```js
 * const { baseRules, typescriptRules, prettierOptions } = require('@huray/eslint-config');
 * ```
 */

module.exports = {
  baseRules: {
    // 템플릿 리터럴 권장
    'prefer-template': 'error',
    'no-useless-concat': 'error',

    // 객체 속성 축약
    'object-shorthand': ['warn'],

    // return, throw, continue, break 뒤 도달 불가능 코드 허용
    'no-unreachable': 'off',
  },

  typescriptRules: {
    // 사용하지 않는 변수 경고
    '@typescript-eslint/no-unused-vars': 'warn',

    // any 허용
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-require-imports': 'off',

    // return, throw, continue, break 뒤 도달 불가능 코드 허용
    '@typescript-eslint/no-unreachable-code': 'off',

    // 빈 interface 허용 여부
    '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'with-single-extends' }],
  },

  prettierOptions: {
    singleQuote: true,
    semi: true,
    useTabs: false,
    tabWidth: 2,
    trailingComma: 'all',
    printWidth: 100,
    arrowParens: 'always',
    endOfLine: 'auto',
    bracketSpacing: true,
    jsxSingleQuote: false,
    bracketSameLine: false,
  },
};
