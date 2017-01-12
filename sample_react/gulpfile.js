var requireDir = require('require-dir');
var runSequence = require('run-sequence');

requireDir('./gulp/tasks', { recurse: true });

var gulp = require('gulp');

gulp.task('watch-start', function() {
  gulp.watch('src/main/less/**/*.less', ["build-css"]);
});

gulp.task('build-js', function(callback) {
  runSequence('clean-js', 'webpack', callback);
});

gulp.task('build-css', function(callback) {
  runSequence('clean-css', 'compile-sass', 'import-css', 'minify-css', callback);
});

gulp.task('build-all', ['build-js', 'build-css']);
gulp.task('default', ['webpack-dev-server', 'watch-start']);
