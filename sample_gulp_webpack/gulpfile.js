var requireDir = require('require-dir');

requireDir('./gulp/tasks', { recurse: true });



var gulp = require('gulp');

gulp.task('watch-start', function() {
  gulp.watch('src/js/*.js', ["webpack"]);
  gulp.watch('webroot/dist/js/*.js', ["bs-reload"]);
});

gulp.task('default', ['browser-sync', 'watch-start']);
