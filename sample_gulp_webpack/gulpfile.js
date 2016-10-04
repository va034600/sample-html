var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true });



var gulp = require('gulp');

gulp.task('watch-start', function() {
  gulp.watch('src/js/*.js', ["webpack"]);
  gulp.watch('webroot/dist/js/*.js', ["bs-reload"]);
});

gulp.task('webpack-dev-server-start', function(callback) {
  var webpackConfig = require('./webpack.config.js');

  new WebpackDevServer(webpack(webpackConfig), {
    publicPath: '/' + webpackConfig.output.publicPath,
    hot: true
  }).listen(3000, 'localhost', function (err) {
  });
});

gulp.task('default', ['webpack-dev-server-start']);
gulp.task('default2', ['browser-sync', 'watch-start']);
