const path = require('path');
const webpack = require('webpack');

module.exports = (env) => ({
  context: path.resolve(__dirname),
  entry: {
    renderer: "./frontend/bundle/renderer.js",
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader?cacheDirectory=true',
        }
      }
    ],
  },
});
