module.exports = {
  entry: './src/main.js',
  output: {
    path: __dirname,
    filename: 'dist/build_main.js'
  },


  // Configuration for dev server
  devServer: {
    port: 3000
  }


};