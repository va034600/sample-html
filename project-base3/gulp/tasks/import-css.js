var gulp = require('gulp');
var cssimport = require('gulp-cssimport');

gulp.task('import-css', function (callback) {
    return gulp.src('./dist/css-source/**/*.css')
        .pipe(cssimport({
            matchPattern: "*.css" // process only css
        }))
        .pipe(gulp.dest('./dist/css-import/'));
});
