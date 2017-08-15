const path = require('path')

module.exports = {
  extends: path.join(__dirname, 'index.js'),
  plugins: [
    'vue'
  ],
  rules: {
    'unicorn/filename-case': ['error', { case: 'pascalCase' }]
  }
}
