var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', function() {
  return gulp.src('lib/*.js')
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename({
        suffix:'.min',
        extname:'.js'
    }))
    .pipe(gulp.dest('dist'));
});
