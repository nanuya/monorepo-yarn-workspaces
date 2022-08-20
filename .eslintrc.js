const path = require('path');

module.exports = {
  extends: ['airbnb', 'prettier'],
  plugins: ['prettier', 'react-hooks', '@emotion', 'jest', 'jest-dom'],
  rules: {
    'prettier/prettier': 'error',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.stories.tsx',
          '**/*.@(spec|test).@(js|ts)?(x)',
          '**/jest.setup.ts',
          '**/.storybook/*.@(js|ts)?(x)',
          '**/webpack.*.js',
          '**/script/*.js',
          '**/mocks/**/*.@(js|ts)?(x)',
        ],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.tsx', '.jsx', 'spec.js'] },
    ],
    'react/function-component-definition': 'off',
    'import/no-duplicates': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '[@]global/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'error',
      { controlComponents: ['input', 'select'] },
    ],
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': [
          'error',
          { variables: false },
        ],
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-floating-promises': 'off',
      },
      parserOptions: {
        project: ['./tsconfig.json', './packages/**/tsconfig.json'],
      },
    },
    {
      files: ['**/*.spec.ts?(x)'],
      rules: {
        '@typescript-eslint/unbound-method': 'off',
        'jest/unbound-method': 'error',
      },
    },
    {
      files: [
        'packages/global/ui-kit/**/*.ts?(x)',
        'packages/global/ui-kit/**/*.js?(x)',
      ],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(
              `${__dirname}/packages/global/ui-kit/tsconfig.json`
            ),
          },
        },
      },
    },
    {
      files: [
        'packages/global/api-sdk/**/*.ts?(x)',
        'packages/global/api-sdk/**/*.js?(x)',
      ],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(
              `${__dirname}/packages/global/api-sdk/tsconfig.json`
            ),
          },
        },
      },
    },
    {
      files: [
        'packages/global/utility/**/*.ts?(x)',
        'packages/global/utility/**/*.js?(x)',
      ],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(
              `${__dirname}/packages/global/utility/tsconfig.json`
            ),
          },
        },
      },
    },
    {
      files: [
        'packages/domain/member/**/*.ts?(x)',
        'packages/domain/member/**/*.js?(x)',
      ],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(
              `${__dirname}/packages/domain/member/tsconfig.json`
            ),
          },
        },
      },
    },
    {
      files: [
        'packages/domain/product/**/*.ts?(x)',
        'packages/domain/product/**/*.js?(x)',
      ],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(
              `${__dirname}/packages/domain/product/tsconfig.json`
            ),
          },
        },
      },
    },
    {
      files: [
        'packages/domain/order/**/*.ts?(x)',
        'packages/domain/order/**/*.js?(x)',
      ],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(
              `${__dirname}/packages/domain/order/tsconfig.json`
            ),
          },
        },
      },
    },
    {
      files: [
        'packages/service/admin-partner/**/*.ts?(x)',
        'packages/service/admin-partner/**/*.js?(x)',
      ],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(
              `${__dirname}/packages/service/admin-partner/tsconfig.json`
            ),
          },
        },
      },
    },
    {
      files: [
        'packages/service/admin-pro/**/*.ts?(x)',
        'packages/service/admin-pro/**/*.js?(x)',
      ],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(
              `${__dirname}/packages/service/admin-pro/tsconfig.json`
            ),
          },
        },
      },
    },
    {
      files: [
        'packages/service/admin-service/**/*.ts?(x)',
        'packages/service/admin-service/**/*.js?(x)',
      ],
      settings: {
        'import/resolver': {
          typescript: {
            project: path.resolve(
              `${__dirname}/packages/service/admin-service/tsconfig.json`
            ),
          },
        },
      },
    },
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx', 'spec.js'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts', '.js', '.jsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  env: {
    browser: true,
    'jest/globals': true,
  },
};