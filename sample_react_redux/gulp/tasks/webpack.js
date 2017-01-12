var gulp = require('gulp');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var webpack = require('gulp-webpack');
var config = require('../config');

gulp.task('webpack', function () {
    return gulp.src('./src/main/ts/main.ts')
  	.pipe(webpack( require('../../webpack.config.js') ))
        	// .pipe(webpack(config.webpack))
        	// .pipe(gulpif(config.js.uglify, uglify()))
        	.pipe(gulp.dest('./public/javascripts/'))
        	;
});