const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const flavor = process.env.FLAVOR || 'development';

module.exports = {
  mode: 'development',

  entry: './src/main.tsx',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new webpack.DefinePlugin({
      'process.env.FLAVOR': JSON.stringify(flavor),
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
    ],
  },
  resolve: {
    extensions: [
      '.ts', '.js', 'tsx',
    ],
  },
};

