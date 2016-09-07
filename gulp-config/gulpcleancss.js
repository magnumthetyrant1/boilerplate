const cleanCSS = require('gulp-clean-css');
module.exports = function (gulp) {
  gulp.task('minify-css', function() {
    return gulp.src('./public/dist/*.css')
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(gulp.dest('./public/dist'));
  });
};
