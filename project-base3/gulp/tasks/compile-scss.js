var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('compile-scss', function(callback) {
    return gulp.src('./src/main/scss/**/*.scss')
        .pipe(sass())
        .on('error', function(err) {
            console.log(err.message);
        })
        .pipe(gulp.dest("./dist/css-source"));
});
