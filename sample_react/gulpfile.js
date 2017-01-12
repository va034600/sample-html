var requireDir = require('require-dir');
var runSequence = require('run-sequence');

requireDir('./gulp/tasks', { recurse: true });

var gulp = require('gulp');

gulp.task('build-js', function(callback) {
  runSequence('clean-js', 'webpack', callback);
});


gulp.task('build-all', ['build-js']);
gulp.task('default', ['webpack-dev-server']);
