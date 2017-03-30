var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('default', function() {
	return gulp.src('lib/*.js')
	.pipe(gulp.dest('dist/js/'))
	.pipe(uglify())
	.pipe(rename({
		suffix:'.min',
		extname:'.js'
	}))
	.pipe(gulp.dest('dist/js'));
});

gulp.task('css', function(){
	return gulp.src('lib/*.css')
	.pipe(gulp.dest('dist/css/'))
	.pipe(uglify())
	.pipe(rename({
		suffix:'.min',
		extname:'.css'
	}))
	.pipe(gulp.dest('dist/css'));
});
