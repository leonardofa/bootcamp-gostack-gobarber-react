module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': ['error', { singleQuote: true }],
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'camelcase': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.js'] }],
    'no-console': ['error', { allow: ['tron'] }],
    'no-underscore-dangle': ["error", { "allow": ["_id"] }]
  },
  settings: {
    "import/resolver": {
      "babel-plugin-root-import": {
        rootPathSuffix: 'src',
      }
    },
  },
};
