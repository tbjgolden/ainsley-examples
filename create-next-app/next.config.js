module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.ainsley$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'ainsley-loader',
          options: {
            generate: {
              addValueToSelector: (selector, valueAbbreviation) => `${selector}-${valueAbbreviation}`,
              addPropertyToSelector: (selector, propertyAbbreviation) => `${selector}-${propertyAbbreviation}`,
              addVariationToSelector: (selector, variationAbbreviation) => `${variationAbbreviation}_${selector}`
            }
          }
        }
      ],
    })

    return config
  },
};
