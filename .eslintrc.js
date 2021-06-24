module.exports = {
  env: {
    es2021: true,
  },
  globals: {
    console: 'readonly',
    document: 'readonly',
    fetch: 'readonly',
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
  plugins: ['prettier'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
