var requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true });



var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('watch-start', function() {
  gulp.watch('src/js/*.js', ["webpack"]);
  gulp.watch('webroot/dist/js/*.js', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch-start']);
