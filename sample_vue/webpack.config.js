const webpack = require('webpack');
var path = require('path');

var config = {
  devtool: "source-map",

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].min.js',
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
              test: /\.vue$/,
              use: [
                  {
                      loader: 'babel-loader',
                  },
                  {
                      loader: 'vue-loader'
                  }
              ]
          },
          {
              test: /\.vhtml$/,
              loader: 'vue-template-loader'
          },
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
    main_js2: [
        "webpack-dev-server/client?http://localhost:3000",
        "webpack/hot/dev-server",
        "./src/main/js/main_js2.js"
    ],
    main_ts: [
        "webpack-dev-server/client?http://localhost:3000",
        "webpack/hot/dev-server",
        "./src/main/ts/main_ts.ts"
    ],
    main_ts2: [
        "webpack-dev-server/client?http://localhost:3000",
        "webpack/hot/dev-server",
        "./src/main/ts/main_ts2.ts"
    ],
    main_router: [
        "webpack-dev-server/client?http://localhost:3000",
        "webpack/hot/dev-server",
        "./src/main/ts/main_router.ts"
    ]
  };

  config.plugins = [
      new webpack.LoaderOptionsPlugin({
          debug: true
      }),
    new webpack.HotModuleReplacementPlugin()
  ];

module.exports = config;
