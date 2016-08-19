var browserSync = require('browser-sync').create();
module.exports = function (gulp) {
  gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "http://localhost:4000"
    });
  });
}
