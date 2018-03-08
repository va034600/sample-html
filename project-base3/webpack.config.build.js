const webpack = require('webpack');
var path = require('path');

var config = {
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].min.js',
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
    plugins:[
        //引数
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify("production")
        }),
        // 圧縮
        new webpack.optimize.UglifyJsPlugin(),
        // 重複モジュール削除
        new webpack.optimize.DedupePlugin(),
    ]
};





config.entry = {
    //mainファイルを作成する。複数作れば複数作られる。
    main: [
        'babel-polyfill',
        'isomorphic-fetch',
        'url-search-params-polyfill',
        "./src/main/ts/main.ts"
    ],
};

module.exports = config;
