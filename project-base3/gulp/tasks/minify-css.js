var gulp = require('gulp');
var minify = require('gulp-minify-css');

gulp.task('minify-css', function () {
    return gulp.src('./dist/css-import/**/*.css')
        .pipe(minify({
            processImport:false
        }))
        .pipe(gulp.dest('./dist/css-min/'));
});