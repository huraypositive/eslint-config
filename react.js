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
        'no-console': 'off', // 콘솔 사용 허용,
        'react/jsx-filename-extension': ['error', {
            extensions: ['.jsx', '.tsx'],
        }],
    },
};
