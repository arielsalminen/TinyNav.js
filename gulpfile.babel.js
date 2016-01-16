import gulp from 'gulp'
import uglify from 'gulp-uglify'
import rename from 'gulp-rename'

gulp.task('default', () => {
  return gulp.src('src/*.js')
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename('tinynav.min.js'))
    .pipe(gulp.dest('dist'));
});