var requireDir = require('require-dir');
var runSequence = require('run-sequence');

requireDir('./gulp/tasks', { recurse: true });

var gulp = require('gulp');

gulp.task('build-js', function (callback) {
    runSequence('webpack-build', callback);
});

gulp.task('build-css', function (callback) {
    runSequence('compile-scss', 'import-css', 'minify-css', callback);
});

gulp.task('build', ['clean-dist', 'build-js', 'build-css']);

gulp.task('default', ['webpack-dev-server']);
