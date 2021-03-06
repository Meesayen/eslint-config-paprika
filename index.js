module.exports = {
  env: {
    'node': true,
    'browser': true,
    'es6': true
  },
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'indent': ['error', 2],
    'semi': ['error', 'never'],
    'no-warning-comments': 'off',
    'capitalized-comments': 'off',
    'curly': ['error', 'multi-line'],
    'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
    'no-eq-null': 'off',
    'quote-props': ['error', 'consistent'],
    'promise/param-names': 'off',
    'operator-linebreak': [
      'error',
      'after',
      {
        'overrides': {
          '?': 'before',
          ':': 'before'
        }
      }
    ],
    'generator-star-spacing': [
      'error',
      {
        'before': true,
        'after': false
      }
    ]
  }
}
