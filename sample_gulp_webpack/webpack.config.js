const webpack = require('webpack');

module.exports = {
  entry: './src/js/main.js',
  output: {
        filename: '[name].js'
  },
  resolve: {
    alias: { 
      underscore2: '../../node_modules/underscore/underscore.js'
    }
  }
};