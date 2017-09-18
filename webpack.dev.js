var path = require("path");
var webpack = require("webpack");

var merge = require("webpack-merge");
var common = require("./webpack.common.js");

module.exports = merge(common, {
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    inline: true,
    hot: true,
    port: 5110,
  },
});
