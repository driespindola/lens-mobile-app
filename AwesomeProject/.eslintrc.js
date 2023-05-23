module.exports = {
  root: true,
  parser: '@babel/eslint-parser',
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['react', 'react-native'],
  rules: {
    // Add any additional rules or overrides here
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
