module.exports = {
    extends: ['eslint:recommended','airbnb-base'],
    env: {
        browser: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 11,
        sourceType: "module",
    },
    rules:{
        'no-console': 'off', // 콘솔 사용 허용,
        'no-debugger': 'off'
    }
}