var gulp = require('gulp');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var config = require('../config');
var gulpWebpack = require('webpack-stream');
var webpack = require('webpack');

gulp.task('webpack', function () {
    return gulp.src('./src/main/ts/main.ts')
	.pipe(gulpWebpack(require('../../webpack.config.js'), webpack))
        	// .pipe(webpack(config.webpack))
        	// .pipe(gulpif(config.js.uglify, uglify()))
        	.pipe(gulp.dest('./public/javascripts/'))
        	;
});