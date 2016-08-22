var jsdoc = require("gulp-jsdoc");

gulp.src("./src/*.js")
  .pipe(jsdoc('./documentation-output'));
