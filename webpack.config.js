const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: 'html-loader',
    }, {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: 'babel-loader',
    }, {
      test: /\.(s*css)$/,
      use: [MiniCssExtractPlugin.loader,
        { loader: 'css-loader', options: { importLoaders: 2 } }, 'sass-loader'],
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/[name].css',
    }),
  ],
};
