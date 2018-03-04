var gulp = require('gulp');

gulp.task('copy-dist', function(callback) {
    return gulp.src([
        'dist/css-min/index.min.css',
        'dist/js-min/main.min.js'
    ])
        .pipe(gulp.dest('webRoot/dist'));
});
