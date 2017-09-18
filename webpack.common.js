var path = require("path");
var { env } = require('process');
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ManifestPlugin = require('webpack-manifest-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: {
    app: [path.resolve(__dirname, "app", "index.js")],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: '[name]-[hash].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          "babel-loader",
          {
            loader: "babel-loader",
            options: {},
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "app", "index.tmpl.html"),
    }),
    new ManifestPlugin(),
    new ExtractTextPlugin('[name]-[hash].css')
  ]
};