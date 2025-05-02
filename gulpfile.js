const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');


function copyHtml() {
  return src("*.html").pipe(dest("dist"));
}

function styles() {
  return src("*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(dest("dist/css"));
}


function scripts() {
  return src("myscripts.js").pipe(dest("dist/js"));
}

function minifyJS() {
  return src('*.js')
  .pipe(babel())
  .pipe(uglify())
  .pipe(dest('dist/js'));
}

function watchFiles() {
    watch("index.scss", styles);
    watch("myscripts.js", scripts);
  }
  

exports.default = parallel(copyHtml, styles, scripts, minifyJS, watchFiles);
