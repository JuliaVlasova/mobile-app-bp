const { src, dest } = require("gulp");
const { series } = require("gulp");
const gulpif = require("gulp-if");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const minifyCSS = require("gulp-minify-css");
const sass = require("gulp-sass")(require("sass"));
const fileinclude = require("gulp-file-include");
const htmlbeautify = require('gulp-html-beautify');
const replace = require('gulp-replace');

function isJavaScript(file) {
  return file.extname === ".js";
}

function isScss(file) {
  return file.extname === ".scss";
}

function isCss(file) {
  return file.extname === ".css";
}

function defaultTask(cb) {
  return src(["src/js/*.js", "src/style/*.scss"])
    .pipe(gulpif(isJavaScript, uglify()))
    .pipe(gulpif(isScss, sass()))
    .pipe(gulpif(isCss, minifyCSS()))
    .pipe(gulpif(isJavaScript, rename({ extname: ".min.js" })))
    .pipe(gulpif(isCss, rename({ extname: ".min.css" })))
    .pipe(gulpif(isCss, dest("output/css/")))
    .pipe(gulpif(isJavaScript, dest("output/js/")));
  cb();
}

function buildHtml(cb) {
    return src(["src/templates/index.html"])
      .pipe(
        fileinclude({
          prefix: "@@",
          basepath: "@file",
        })
      )
      .pipe(replace(/[\u200B-\u200D\uFEFF]/g, ""))
      .pipe(htmlbeautify())
      .pipe(dest("./"));
  cb();
}

exports.default = series(defaultTask, buildHtml);
