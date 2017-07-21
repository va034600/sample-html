var requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true });

var gulp = require('gulp');

gulp.task('default', ['webpack-dev-server']);
