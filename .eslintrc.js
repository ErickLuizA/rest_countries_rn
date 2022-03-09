module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    semi: 'off',
    '@typescript-eslint/no-shadow': ['error'],
    'no-shadow': 'off',
    'no-undef': 'off',
    'prettier/prettier': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react-native/no-inline-styles': 'off',
    'comma-dangle': 'off'
  }
}
