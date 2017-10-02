const webpack = require('webpack');
var path = require('path');

var config = {
  devtool: "source-map",

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]2.js',
    publicPath: "/public/"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: ['node_modules', 'src/main/html', 'src/main/js', 'src/lib/js', 'src/main/ts', 'src/lib/ts', 'src/main/tsx', 'src/lib/manual'],
  },
  module: {
    loaders: [
      { test: /\.ts(x?)$/, loader: 'ts-loader' }
    ]
  }
};




var minimist = require('minimist');
var options = minimist(process.argv.slice(2), envOption);
var envOption = {
  string: 'env',
  default: { env: process.env.NODE_ENV || 'development' }
};
var isProduction = (options.env === 'production') ? true : false;
console.log('[build env]', options.env, '[is production]', isProduction);

if(isProduction){
  config.entry = {
    main:'./src/main/tsx/main.tsx'
  };
}else{
  config.plugins = [
    new webpack.HotModuleReplacementPlugin()
  ];

  config.entry = {
    main: [
      "webpack-dev-server/client?http://localhost:3000",
      "webpack/hot/dev-server",
      // "webpack/hot/only-dev-server",
      "./src/main/tsx/main.tsx"
    ]
  };
}

module.exports = config;