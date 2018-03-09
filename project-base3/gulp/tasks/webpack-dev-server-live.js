var gulp = require('gulp');
var webpack = require("webpack");
var WebpackDevServer = require("webpack-dev-server");

var webpackConfig = require('../../webpack.config.js');
var compiler = webpack(webpackConfig);

gulp.task('webpack-dev-server-live', function(callback) {
    new WebpackDevServer(compiler, {
        contentBase:"webRootLive",
        publicPath: webpackConfig.output.publicPath,
        hot: true,
        historyApiFallback: true
    }).listen(3000, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        callback();
    });
});
