var gulp = require('gulp');
var concat = require('gulp-concat');
var annotate = require('gulp-ng-annotate');
var sass = require('gulp-sass');

var paths = {
 jsSource:['./public/app/**/*.js'],
 cssSource: ['./public/app/**/*.sass'],
 viewsSource: ['./public/**/*.html']
};

gulp.task('js', function(){
  gulp.src(paths.jsSource)
   .pipe(annotate())
   .pipe(concat('bundle.js'))
   .pipe(gulp.dest('./dist'));
});

gulp.task('views',function(){
  gulp.src(paths.viewsSource)
  .pipe(gulp.dest('./dist'));
});
gulp.task('css', function(){
  gulp.src(paths.cssSource)
  .pipe(sass())
  .pipe(concat("bundle.css"))
  .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function(){
  gulp.watch(paths.jsSource, ['js']);
  gulp.watch(paths.cssSource, ['css']);
  gulp.watch(paths.viewsSource, ['views']);
});
gulp.task('default', ['js', 'views', 'watch', 'css']);
