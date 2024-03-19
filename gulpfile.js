const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('scss/index.scss')
    .pipe(sass())
    .pipe(dest('src/css')); // Changed src/css to 'src/css'
}

function watchTask() {
  watch('scss/index.scss', buildStyles);
}

exports.default = series(buildStyles, watchTask);
