const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "",
  },
  module: {
    rules: [
        {
            test: /\.(jpg|png|svg)$/,
            loader: 'url-loader',
            options: {
              limit: 25000,
            },
        },
        {
            test: /\.(jpg|png|svg)$/,
            loader: 'file-loader',
            options: {
              name: '[path][name].[hash].[ext]',
            },
        },
    ],
  },
};