module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        indent: [2, 4],
        'react/jsx-indent-props': [2, 4],
        quotes: ['error', 'single'],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'no-shadow': 'off',
        'import/prefer-default-export': 'off',
        'max-len': ['error', 150],
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'import/no-extraneous-dependencies': 'warn',
        'no-underscore-dangle': 'off',
        'no-undef': 'off'
    },
    globals: {
        __IS_DEV__: 'writable', // true
    },
};
