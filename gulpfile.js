var gulp = require('gulp'),
    sass = require('gulp-sass'),
    cssMin = require('gulp-cssmin'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create(),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat')

gulp.task('dist-sass', function(cb){
  return gulp.src('content/sass/**/*.sass')
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['last 40 versions'],
    cascade: false
  }))
  // .pipe(cssMin())
  .pipe(gulp.dest('./public/css/'))
  .pipe(browserSync.stream())
})

gulp.task('dist-js', function () {
  return gulp.src('content/js/**/*.js')
            .pipe(concat('main.js'))
            .pipe(uglify())
            .pipe(gulp.dest('public/js'))
})

gulp.task('watch', function (cb) {
  gulp.watch('content/sass/**/*.sass', ['dist-sass'])
  gulp.watch('content/js/**/*.js', ['dist-js'])
  gulp.watch('public/*.html').on('change', browserSync.reload)
})

gulp.task('browser-sync', function(cb) {
  browserSync.init({
    server: {
      baseDir: './public'
    }
  })
})

gulp.task('dist', ['dist-sass', 'dist-js'], function(){
  console.log('dist ready')
})

gulp.task('default', ['browser-sync', 'dist', 'watch'] , function () {
})
