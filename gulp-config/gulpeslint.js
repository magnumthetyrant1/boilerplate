const eslint = require('gulp-eslint');
module.exports = (gulp) => {
	gulp.task('lint', function () {
		gulp.src(['../public/app/*.js'])
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(eslint.failAfterError());
	});
};
