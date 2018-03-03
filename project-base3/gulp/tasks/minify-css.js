var gulp = require('gulp');
var minify = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('minify-css', function () {
    return gulp.src('./dist/css-import/**/*.css')
        .pipe(minify({
            processImport:false
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/css-min/'));
});