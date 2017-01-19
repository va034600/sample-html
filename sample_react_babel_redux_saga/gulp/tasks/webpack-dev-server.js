var gulp = require('gulp');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

var webpackConfig = require('../../webpack.config.js');
var compiler = webpack(webpackConfig);

gulp.task('webpack-dev-server', function(callback) {
    new WebpackDevServer(compiler, {
        // stats: {
        //     colors: true
        // },
        publicPath: webpackConfig.output.publicPath,
        hot: true,
        proxy: {
            //api
            "/api/*": "http://localhost:9000/"
        }
    }).listen(3000, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);

        // keep the server alive or continue?
        callback();
    });
});