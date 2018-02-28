const webpack = require('webpack');
var path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

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
          // {
          //     test: /\.vue$/,
          //     use: [
          //         {
          //             loader: 'babel-loader',
          //         },
          //         {
          //             loader: 'vue-loader'
          //         }
          //     ]
          // },
          {
              test: /\.vhtml$/,
              loader: 'vue-template-loader'
          },
          {
              test: /\.scss$/,

              // loader: 'sass-loader'

              use: [
                  {
                      loader: 'style-loader'
                  },
                  {
                      loader: 'css-loader'
                  },
                  {
                      loader: 'sass-loader'
                  }
              ]

              // use: ExtractTextPlugin.extract({
              //     fallback: 'style-loader',
              //     //resolve-url-loader may be chained before sass-loader if necessary
              //     use: ['css-loader', 'sass-loader']
              // })
          },
          {
          test: /\.ts$/,
          use: [
            {
              loader: 'babel-loader'
            },
            {
              loader: 'ts-loader'
            }
          ]
        }
    ]
  },
    // plugins: [
    //     new ExtractTextPlugin('[name].bundle.css')
    //     //if you want to pass in options, you can do so:
    //     //new ExtractTextPlugin({
    //     //  filename: 'style.css'
    //     //})
    // ]
};





config.entry = {
    main: [
        'babel-polyfill',
        'isomorphic-fetch',
        'url-search-params-polyfill',
        "webpack-dev-server/client?http://localhost:3000",
        "webpack/hot/dev-server",
        "./src/main/ts/main.ts"
    ],
    style: "./src/main/ts/style.ts"
};

  config.plugins = [
      new webpack.LoaderOptionsPlugin({
          debug: true
      }),
    new webpack.HotModuleReplacementPlugin()
  ];

module.exports = config;
