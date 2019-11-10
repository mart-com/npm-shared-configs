module.exports = {
  extends: ['eslint:recommended', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:prettier/recommended'],
  env: {
    es6: true,
    node: true,
  },
  plugins: ['prettier', 'import'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': [2, { argsIgnorePattern: '^_', caughtErrors: 'none' }],
    'prettier/prettier': 'error',
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'import/no-commonjs': 2,
  },
};
