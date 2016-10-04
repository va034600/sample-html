const webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        main: [
            "webpack-dev-server/client?http://localhost:3000",
            "webpack/hot/dev-server",
            './src/js/main.js',
        ]},
  resolve: {
    alias: { 
      underscore2: '../../node_modules/underscore/underscore.js'
    }
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]2.js',
    publicPath: "/public/"
  },
  devServer: {
    contentBase: 'webroot',
    port: 3000,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};