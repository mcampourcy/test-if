module.exports = {
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 7,
    sourceType: 'module',
  },
  env: { node: true },
  rules: {
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': ['error', 'never', {
      'arraysInArrays': false,
      'objectsInArrays': true,
    } ],
    'array-element-newline': ['error', 'consistent'],
    'arrow-parens': ['error', 'as-needed', { 'requireForBlockBody': true } ],
    'arrow-spacing': 'error',
    'brace-style': 'error',
    'block-spacing': 'error',
    'callback-return': 'error',
    'camelcase': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error', { 'before': false, 'after': true } ],
    'comma-style': ['error', 'last'],
    'consistent-return': 'error',
    'dot-location': ['error', 'property'],
    'eol-last': ['error', 'always'],
    'eqeqeq': ['error', 'always'],
    'func-call-spacing': ['error', 'never'],
    'function-call-argument-newline': ['error', 'consistent'],
    'function-paren-newline': ['error', 'multiline'],
    'id-blacklist': ['error', 'data', 'callback'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'indent': ['error', 2, { 'SwitchCase': 1 } ],
    'key-spacing': ['error', { 'afterColon': true } ],
    'keyword-spacing': ['error', {
      'before': true,
      'after': true,
    } ],
    'max-len': ['error', {
      'code': 160,
      'ignoreComments': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
    } ],
    'no-bitwise': 'error',
    'no-confusing-arrow': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-floating-decimal': 'error',
    'no-label-var': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-param-reassign': 'error',
    'no-return-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-template-curly-in-string': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'no-whitespace-before-property': 'error',
    'nonblock-statement-body-position': ['error', 'beside'],
    'object-curly-newline': ['error', { 'multiline': true } ],
    'object-curly-spacing': ['error', 'always', { 'arraysInObjects': true } ],
    'object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true } ],
    'one-var': ['error', 'never'],
    'operator-linebreak': ['error', 'after'],
    'padded-blocks': ['error', 'never'],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': ['error', {
      'object': true,
      'array': true,
    } ],
    'prefer-named-capture-group': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quotes': ['error', 'single', { 'avoidEscape': true } ],
    'quote-props': ['error', 'consistent'],
    'radix': 'error',
    'rest-spread-spacing': ['error', 'never'],
    'semi': ['error', 'never'],
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'switch-colon-spacing': 'error',
    'template-curly-spacing': 'error',
    'vars-on-top': 'error',
    'yoda': 'error',
  },
}
