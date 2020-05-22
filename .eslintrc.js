module.exports = {
  env: {
    browser: true,
    node: true,
    jest: true
  },
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
  ],
  globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
      ecmaFeatures: {
        jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'no-console': 1,
    'camelcase': [1],
    'arrow-parens': [2, 'always']
  },
};
