module.exports = {
  extends: ['next', 'prettier', 'next/core-web-vitals', 'prettier'],
  plugins: ['react', 'react-hooks', 'prettier'],
  rules: {
    quotes: ['error', 'single'],
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        caughtErrors: 'none',
        ignoreRestSiblings: true,
        vars: 'all'
      }
    ],
    'prefer-const': 'error',
    'react-hooks/exhaustive-deps': 'error'
  }
};
