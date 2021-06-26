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
    // webpack에서 alias 설정을 통해 절대경로로 바꿔주면 unresolve에러가 난다.(실제 에러가 나는 건 아니고 eslint의 에러) 이를 해결하기 위한 코드이다.
    'import/no-unresolved': 'off',
    // export const ~~~ 이런 식으로 쓰면 default를 쓰라고 eslint 에러가 나온다. 이를 해결하기 위한 코드
    'import/prefer-default-export': 'off',
    // await을 return하려면 eslint에러가 발생한다. 이를 해결하기 위한 코드
    'no-return-await': 'off',
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
