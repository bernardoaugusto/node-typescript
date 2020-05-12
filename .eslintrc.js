module.exports = {
    parcer: '@typescript-eslint/parser',
    "env": {
        "es6": true,
        "node": true
    },
    plugins: ['@typescript-eslint'],
    "extends": [
        'plugin:@typescript-eslint/recommend',
        'prettier/@typescript-eslint',
        "standard"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
};
