# webpack-prettier-eslint-template

Template that includes:

- Webpack v5 configuration
- Prettier v3 configuration (Formatting)
- ESLint v9 configuration (Code Quality)

## Considerations

- For the sake of simplicity, the configuration sticks to the Prettier defaults and the ESLint recommended (from `@eslint/js`), just adding some personal preferences in `Prettier.config.mjs`

- Note the linting & formatting scripts in `package.json`, obtained from [this article](https://blog.logrocket.com/using-prettier-eslint-javascript-formatting/)

- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) is not needed anymore, since ESLint v9 moved all its formatted rules to [@stylistic plugins](https://eslint.style/)

- If you want to add some configuration from the [@stylistic plugins](https://eslint.style/), should consider that [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) may not offer support for ESLint v9 or higher, as stated on [this issue](https://github.com/prettier/eslint-config-prettier/issues/283)
