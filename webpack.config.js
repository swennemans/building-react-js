const webpack = require("webpack");

module.exports = {
  entry: './app/index.js',
  output: {
    devtool: 'eval-source-map',
    path: './',
    fileName: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [{
            test: /\.js/,
            exclude: /node_modules/,
            loader: 'babel'
      }],
  },
  devServer: {
        inline: true,
        port: 4000
    },
}
