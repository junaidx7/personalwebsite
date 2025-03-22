// Import required Gulp functions: src (for input), dest (for output), watch (for monitoring), series (for sequential tasks)
const { src, dest, watch, series } = require('gulp');
// Configure gulp-sass to use the sass compiler - enables SCSS/SASS compilation
const sass = require('gulp-sass')(require('sass'));

// Function to compile SCSS to CSS
function buildStyles() {
  return src('src/scss/index.scss') // Get the main SCSS file as source
    .pipe(sass()) // Transform SCSS to CSS using sass compiler
    .pipe(dest('src/css')); // Output the compiled CSS to src/css directory
}

// Function to watch for changes in SCSS files
function watchTask() {
  //watch('src/scss/index.scss', buildStyles); // Monitor index.scss for changes and run buildStyles when changes occur
  watch('src/scss/**/*.scss', buildStyles);
}

// Export the default Gulp task that runs buildStyles first, then starts watching for changes
exports.default = series(buildStyles, watchTask);
