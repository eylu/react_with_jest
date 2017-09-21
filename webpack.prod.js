var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var webpack = require("webpack");

var merge = require("webpack-merge");
var common = require("./webpack.common.js");

module.exports = merge(common, {
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    // new UglifyJSPlugin()
  ]
});

