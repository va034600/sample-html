const webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionWebpackPlugin = require("compression-webpack-plugin");

var config = {
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
                test: /\.vhtml$/,
                loader: 'vue-template-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    //resolve-url-loader may be chained before sass-loader if necessary
                    use: ['css-loader', 'sass-loader']
                })
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
};





config.entry = {
    main: [
        'babel-polyfill',
        'isomorphic-fetch',
        'url-search-params-polyfill',
        "./src/main/ts/main.ts"
    ],
};

config.plugins = [
    // new ExtractTextPlugin('[name].bundle.css'),
    // 圧縮
    new webpack.optimize.UglifyJsPlugin(),
    // 重複モジュール削除
    new webpack.optimize.DedupePlugin(),
    // new CompressionWebpackPlugin({
    //     test: /\.js/
    // }),
];

module.exports = config;
