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
    extensions: [".ts", ".vue", ".js"],
    modules: ['node_modules', 'src/main/html', 'src/main/js', 'src/lib/js', 'src/main/ts', 'src/lib/ts'],
    alias: {
      vue: 'vue/dist/vue.common.js'
    }
  },
  module: {
      rules: [
        { 
          test: /\.ts$/, 
          use: [
            {
              loader: 'babel-loader',
            }, 
            {
              loader: 'ts-loader',
              options: {
                appendTsSuffixTo: [/\.vue$/]
              }
            }
          ]
        }
    ]
  }
};





config.entry = {
    main_js: [
      "webpack-dev-server/client?http://localhost:3000",
      "webpack/hot/dev-server",
      "./src/main/js/main_js.js"
    ],
    main_ts: [
      "webpack-dev-server/client?http://localhost:3000",
      "webpack/hot/dev-server",
      "./src/main/ts/main_ts.ts"
    ]
  };

  config.plugins = [
      new webpack.LoaderOptionsPlugin({
          debug: true
      }),
    new webpack.HotModuleReplacementPlugin()
  ];

module.exports = config;
