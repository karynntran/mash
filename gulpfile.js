var gulp = require('gulp'),
  connect = require('gulp-connect'),
  sass = require('gulp-ruby-sass'),
  autoprefixer = require('gulp-autoprefixer'),
  minifycss = require('gulp-minify-css'),
  rename = require('gulp-rename');
 
gulp.task('webserver', function() {
  connect.server();
});
 
gulp.task('styles', function() {
  return sass('sass', { style: 'expanded' })
    .pipe(gulp.dest('css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  gulp.watch('sass/*.scss', ['styles']);
});

gulp.task('default', ['webserver', 'watch'], function(){

});