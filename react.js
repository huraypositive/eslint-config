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
            extensions: ['.js', '.tsx'],
        }],
        'import/no-unresolved': 'off', // 절대경로 사용하기 위해 설정
    },
};
