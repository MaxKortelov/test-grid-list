const StylelintPlugin = require("stylelint-webpack-plugin");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");

module.exports = {
  webpack: function (config, env) {
    return {
      ...config,
      plugins: [
        ...config.plugins,
        new StylelintPlugin(),
        new FilterWarningsPlugin({
          exclude: /mini-css-extract-plugin/
        })
      ]
    };
  }
};
