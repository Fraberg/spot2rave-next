module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
    },
    parserOptions: {
      parser: 'babel-eslint',
    },
    extends: [
      'prettier/vue',
      'plugin:vue/base',
    ],
    plugins: ['prettier'],
    // add your custom rules here
    rules: {
      'no-console': 'off',
      'semi': ['error', 'never'],
      'quotes': ['error', 'single'],
    },
  }
  