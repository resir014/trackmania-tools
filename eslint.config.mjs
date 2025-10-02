import { config as defaultConfig } from '@epic-web/config/eslint';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
  ...defaultConfig,
  eslintPluginPrettierRecommended,
  eslintConfigPrettier,
  {
    rules: {
      'object-curly-spacing': 'off',
      'import/consistent-type-specifier-style': 'off',
    },
    ignores: ['.astro/*'],
  },
];
