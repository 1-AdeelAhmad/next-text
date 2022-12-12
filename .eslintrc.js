// const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'google', 'prettier',],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'no-trailing-spaces': ERROR,
        'no-multiple-empty-lines': ERROR,
        semi: [ERROR, 'always'],
        'object-curly-spacing': [WARN, 'always'],
        quotes: [WARN, 'single'],
        'require-jsdoc': [
            WARN,
            {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: false,
                    ClassDeclaration: false,
                    ArrowFunctionExpression: false,
                    FunctionExpression: false,
                },
            },
        ],
        // suppress errors for missing 'import React' in files
        'react/react-in-jsx-scope': 'off',
        // allow jsx syntax in js files (for next.js project)
        'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
