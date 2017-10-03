var gulp = require('gulp');
var rimraf = require('rimraf');

gulp.task('clean-js', function(callback) {
    return rimraf('./dist/js', callback);
});