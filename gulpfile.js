var gulp = require('gulp');

// Compile Sass into CSS using gulp-sass [sass].
// =============================================================================
require('./gulp-config/gulpsass')(gulp);

// Start the server [start]
// =============================================================================
require('./gulp-config/gulpnodemon')(gulp);

// Combine all js files into a single file[scripts]
// =============================================================================
require('./gulp-config/gulpconcat')(gulp);

// Compress the js [compress]
// =============================================================================
require('./gulp-config/gulpuglify')(gulp);

//Compress CSS [minify-css]
// =============================================================================
require('./gulp-config/gulpcleancss')(gulp);

//browserSync
require('./gulp-config/gulpbrowsersync')(gulp);

//Combine and uglify js files.
// =============================================================================
gulp.task('js', ['scripts', 'compress']);

//Compile sass on compress css
// =============================================================================
gulp.task('css', ['sass', 'minify-css']);

// Run the default gulp tasks.
// =============================================================================
gulp.task('default', ['js', 'css', 'start']);

/*----------------------------END OF FILE-------------------------------------*/
