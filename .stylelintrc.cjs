/** @type {import('stylelint').Config} */
module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-tailwind',
    'stylelint-config-html/html',
    'stylelint-prettier/recommended',
  ],
  rules: {
    'unit-allowed-list': ['em', 'rem', 'ms', 'ch', 's', 'px', '%', 'deg', 'fr', 'vh', 'vw', 'svh', 'svw'],
  },
};
