const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: './dist',
  },
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      template: './src/static/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = config;
