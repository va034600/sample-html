var gulp = require('gulp');
var browserSync =require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync({
        server: {
             baseDir: "./webroot/"       //対象ディレクトリ
            ,index  : "index.html"      //インデックスファイル
        }
    });
});