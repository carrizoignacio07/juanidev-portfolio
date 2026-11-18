import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    { ignores: ['dist/**'] },
    {
        files: ['**/*.{js,mjs,cjs,jsx}'],
        languageOptions: { globals: globals.browser },
        settings: { react: { version: 'detect' } },
    },
    pluginReact.configs.flat.recommended,
    {
        files: ['**/*.{js,mjs,cjs,jsx}'],
        plugins: { prettier: prettierPlugin },
        rules: {
            'prettier/prettier': 'error',
            // Modern JSX runtime and code samples inside <pre> blocks do not
            // need these legacy rules.
            'react/react-in-jsx-scope': 'off',
            'react/jsx-uses-react': 'off',
            'react/prop-types': 'off',
            'react/no-unescaped-entities': 'off',
            'react/jsx-no-comment-textnodes': 'off',
        },
    },
]);
