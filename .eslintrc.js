module.exports = {
  env: {
    es2017: true,
    browser: true,
    jest: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:testing-library/recommended',
    'airbnb-typescript',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'spaced-comment': ['error', 'always', { markers: ['/'] }],
    '@typescript-eslint/interface-name-prefix': ['error', 'always'],
    '@typescript-eslint/explicit-function-return-type': [
      'warn',
      {
        allowExpressions: true,
      },
    ],
    'testing-library/no-debug': ['error', { renderFunctions: ['renderWithTheme'] }],
  },
  overrides: [
    {
      files: ['*.test.tsx', '*.test.ts', 'setupTests.ts', './src/testUtils/*'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
    {
      files: ['*.stories.tsx', '*.stories.ts'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
