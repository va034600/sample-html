const path = require("path");

module.exports = {
    mode: 'development',

    entry: {app: './src/index.js'},
    output: {
        path: path.join(__dirname, "public"),
        publicPath: "/js/",
        filename: '[name].js',
        libraryTarget: 'umd'
    },
    devtool: 'inline-source-map',

    devServer: {
        open: true,
        openPage: "index.html",
        contentBase: path.join(__dirname, 'public'),
        watchContentBase: true,
        port: 3000,
    }
};