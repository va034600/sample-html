const webpack = require('webpack');
var path = require('path');

module.exports = {
    cache: true,
    entry: {
        app: [
            "webpack-dev-server/client?http://localhost:3000",
            "webpack/hot/dev-server",
            './src/main.js',
        ]},
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'build_main.js',
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