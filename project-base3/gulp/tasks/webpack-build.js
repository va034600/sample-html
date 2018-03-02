var gulp = require('gulp');
var gulpWebpack = require('webpack-stream');
var webpack = require('webpack');

gulp.task('webpack-build', function() {
    var config = require("../../webpack.config.build.js");

    return gulp.src('src/main/ts/main.ts')
        .pipe(gulpWebpack(config, webpack))
        .pipe(gulp.dest('./dist/js-min'));
});
