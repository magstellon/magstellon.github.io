module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: {
      'ts': '@typescript-eslint/parser',
      'js': '@typescript-eslint/parser',
      '<template>': 'espree',
    },
  },
  extends: [
    '@antfu/eslint-config',
    'eslint:recommended',
    'plugin:vue/vue3-strongly-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  env: {
    es2022: true,
  },
  rules: {
    'vue/static-class-names-order': ['error'],
    'complexity': ['error', 5],
    'max-params': ['error', 4],
    'max-statements': ['error', 10],
    'max-statements-per-line': ['error', { max: 1 }],
    'max-nested-callbacks': ['error', 2],
    'max-depth': ['error', { max: 3 }],
    'max-lines': ['warn', { max: 500, skipBlankLines: true, skipComments: true }],
    'max-len': ['error', { code: 150 }],
  },
  ignorePatterns: ['**/*.json', '*.test.ts'],
}
