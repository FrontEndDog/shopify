module.exports = {
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.liquid',
      options: {
        singleQuote: false,
      },
    },
  ],
  plugins: ['@shopify/prettier-plugin-liquid'],
};
