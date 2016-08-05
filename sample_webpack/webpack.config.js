const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname,
    filename: 'webroot/dist/build_main.js'
  },


  // Configuration for dev server
  // devServer: {
  //   port: 3000,
  //   hot: true,
  //   inline: true
  // },

  // plugins: [
  //   new webpack.HotModuleReplacementPlugin(),
  // ]


};