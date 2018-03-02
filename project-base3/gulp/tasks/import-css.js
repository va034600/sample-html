var gulp = require('gulp');
var cssimport = require('gulp-cssimport');
var rename = require('gulp-rename');

gulp.task('import-css', function (callback) {
    var options = {
        matchPattern: "*.css" // process only css
    };

    return gulp.src('./dist/css-source/**/*.css')
        .pipe(cssimport(options))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/css-import/'));
});
