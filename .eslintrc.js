module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:@next/next/recommended'
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: [
        '@typescript-eslint'
      ],
      extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
      parser: '@typescript-eslint/parser',
      parserOptions: { project: ['./tsconfig.json'] }
    }
  ],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': { '@typescript-eslint/parser': ['.ts', '.tsx'] },
    'import/resolver': {
      node: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
      alias: [
        ['@/components', './components'],
        ['@/libs', './libs'],
        ['@/form', './components/Form'],
        ['@/element', './components/Element'],
        ['@/views', './views'],
        ['@/layouts', './layouts'],
        ['@/store', './store'],
        ['@/hooks', './hooks'],
        ['@/hocs', './hocs'],
        ['@/type', './types']
      ]
    }
  },
  plugins: [
    'react'
  ],
  ignorePatterns: [
    'public/*'
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 'off',
    'comma-dangle': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'react/no-array-index-key': ['error'],
    'react/require-default-props': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'import/extensions': 'off',
    'typescript-eslint/ban-ts-comment': 'off',
    'max-len': [2, {
      code: 200,
      tabWidth: 4,
      ignoreUrls: true
    }],
    camelcase: 'off',
    'no-shadow': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react/self-closing-comp': 'off',
    semi: ['error', 'never'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-param-reassign': ['off'],
    'prefer-const': [0, { destructuring: 'all' }],
    'linebreak-style': 0,
    'no-plusplus': 'off',
    'prefer-template': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/button-has-type': 'off',
    'no-console': 'off',
    'space-before-function-paren': ['error', {
      anonymous: 'never',
      named: 'never',
      asyncArrow: 'always'
    }],
    'arrow-parens': 0,
    'arrow-body-style': ['error', 'as-needed'],
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': ['error', {
      ObjectExpression: { multiline: true },
      ObjectPattern: { multiline: true },
      ImportDeclaration: { multiline: true },
      ExportDeclaration: { multiline: true, minProperties: 3 }
    }],
    'react/jsx-closing-bracket-location': [0],
    'react/prop-types': [0, { ignore: true }],
    'react/jsx-one-expression-per-line': 0,
    'no-nested-ternary': [0],
    'no-bitwise': ['error', { allow: ['<<'] }],
    'react-hooks/exhaustive-deps': 0,
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'jsx-a11y/label-has-associated-control': ['off', { required: { some: ['nesting', 'id'] } }],
    'jsx-a11y/label-has-for': ['off', { required: { some: ['nesting', 'id'] } }],
    'dot-notation': 'off',
    'prefer-destructuring': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/no-noninteractive-tabindex': 'off',
    'react/jsx-uses-react': ['error'],
    'react/no-danger': 'off',
    'react/no-danger-with-children': ['error'],
    'react/display-name': 'off',
    'react/jsx-indent-props': [2, 2],
    'brace-style': ['error', '1tbs'],
    curly: ['error', 'all'],
    'react/jsx-no-bind': ['error'],
    'react/jsx-key': ['error', { warnOnDuplicates: true }],
    'consistent-return': 'off',
    'react/destructuring-assignment': 'off',
    'import/no-extraneous-dependencies': ['off'],
    'guard-for-in': 'off',
    'no-restricted-syntax': 'off',
    'no-tabs': 'off',
    'func-style': 'off',
    'react/function-component-definition': 'off',
    'default-param-last': 'off'
  }
}
