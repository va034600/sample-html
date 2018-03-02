var gulp = require('gulp');
var del = require('del');

gulp.task('clean-dist', function(callback) {
    return del(['./dist'], callback);
});
