var eslint = require('gulp-eslint');
gulp.task('lint', function () {
	gulp.src(['../public/app/*.js'])
	.pipe(eslint())
	.pipe(eslint.format())
	.pipe(eslint.failAfterError());
});
