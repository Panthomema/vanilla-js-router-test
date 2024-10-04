import js from '@eslint/js';
import globals from 'globals';

export default [
  { languageOptions: { globals: globals.browser } },
  js.configs.recommended,
  {
    ignores: ['**/dist/*'],
  },
  {
    rules: {},
  },
  {
    files: ['webpack.*'],
    languageOptions: {
      sourceType: 'commonjs',
      env: {
        node: true,
      }
    },
  },
];
