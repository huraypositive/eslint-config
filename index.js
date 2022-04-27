module.exports = {
    env: {
        es2021: true,
    },
    extends: ['eslint:recommended', 'airbnb-base'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'react/prop-types': 'off',
        'no-console': 'off',
        'no-unused-vars': 1
    },
};
