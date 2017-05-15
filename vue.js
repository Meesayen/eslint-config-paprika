module.exports = {
  extends: './index.js',
  plugins: [
    'vue'
  ],
  rules: {
    'unicorn/filename-case': ['error', { case: 'pascalCase' }]
  }
}
