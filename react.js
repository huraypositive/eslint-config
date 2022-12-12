module.exports = {
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'airbnb/hooks',
    ],
    plugins: ['react'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'react/prop-types': 'off', // react prop-types 필수로 적용안해도 됨
        'react/jsx-filename-extension': ['error', { // js,tsx파일에서 jsx문법을 사용가능하게 확장
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        }],
        'import/no-unresolved': 'off', // 절대경로 사용하기 위해 설정,
        'react/react-in-jsx-scope': 'off',
        'import/prefer-default-export': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
                json: 'never',
            },
        ],
        'react/jsx-props-no-spreading': 'off',
        'react/require-default-props': 'off',
        'no-param-reassign': [
            'error',
            {
                props: true,
                ignorePropertyModificationsFor: ['state'],
            },
        ],
        'import/no-extraneous-dependencies': ['error', {devDependencies: true}],
        'react/no-array-index-key': 'off',
        'react-hooks/exhaustive-deps': [
            'warn',
            {
                additionalHooks: 'useRecoilCallback',
            },
        ],
        'consistent-return': 'off',
        'import/order': [
            'error',
            {
              groups: [
                'builtin',
                'external',
                'internal',
                ['sibling', 'parent', 'index'],
                'object',
                'type',
                'unknown',
              ],
              pathGroups: [
                {
                  pattern: '{react*, react*/**}',
                  group: 'external',
                  position: 'before',
                },
              ],
              pathGroupsExcludedImportTypes: ['react', 'react-dom', 'unknown'],
              alphabetize: {
                order: 'asc',
                caseInsensitive: true,
              },
            },
        ],
    },
};
