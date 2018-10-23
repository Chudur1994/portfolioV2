// gulpfile.js
const gulp = require("gulp");
const less = require("gulp-less");
const babel = require("gulp-babel");
const inject = require("gulp-inject");
const server = require("gulp-webserver");
const htmlclean = require("gulp-htmlclean");
const cleanCSS = require("gulp-clean-css");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const prefixer = require("gulp-autoprefixer");

const paths = {
  src: "src/**/*",
  srcHTML: "src/**/*.html",
  srcCSS: "src/**/*.less",
  srcJS: "src/**/*.js",

  tmp: "tmp",
  tmpIndex: "tmp/index.html",
  tmpCSS: "tmp/**/*.css",
  tmpJS: "tmp/**/*.js",

  docs: "docs",
  docsIndex: "docs/index.html",
  docsCSS: "docs/**/*.css",
  docsJS: "docs/**/*.js"
};

gulp.task("html", () => {
  return gulp.src(paths.srcHTML).pipe(gulp.dest(paths.tmp));
});

gulp.task("css", () => {
  return gulp
    .src(paths.srcCSS)
    .pipe(less())
    .pipe(gulp.dest(paths.tmp));
});

gulp.task("js", () => {
  return gulp
    .src(paths.srcJS)
    .pipe(babel())
    .pipe(gulp.dest(paths.tmp));
});

gulp.task("copy", ["html", "css", "js"]);

gulp.task("inject", ["copy"], () => {
  const css = gulp.src(paths.tmpCSS);
  const js = gulp.src(paths.tmpJS);
  return gulp
    .src(paths.tmpIndex)
    .pipe(inject(css, { relative: true }))
    .pipe(inject(js, { relative: true }))
    .pipe(gulp.dest(paths.tmp));
});

gulp.task("serve", ["inject"], () => {
  return gulp.src(paths.tmp).pipe(
    server({
      port: 3000,
      livereload: true
    })
  );
});

gulp.task("watch", ["serve"], () => {
  gulp.watch(paths.src, ["inject"]);
});

gulp.task("default", ["watch"]);

//////////////////////////////// BUILD /////////////////////////////////////////
gulp.task("html:docs", () => {
  return gulp
    .src(paths.srcHTML)
    .pipe(htmlclean())
    .pipe(gulp.dest(paths.docs));
});
gulp.task("css:docs", () => {
  return gulp
    .src(paths.srcCSS)
    .pipe(less({ compress: true }))
    .pipe(
      prefixer({
        browsers: ["last 10 versions", "ie 9"],
        cascade: false
      })
    )
    .pipe(concat("style.min.css"))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.docs));
});
gulp.task("js:docs", () => {
  return gulp
    .src(paths.srcJS)
    .pipe(babel())
    .pipe(concat("script.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(paths.docs));
});
gulp.task("copy:docs", ["html:docs", "css:docs", "js:docs"]);
gulp.task("inject:docs", ["copy:docs"], () => {
  const css = gulp.src(paths.docsCSS);
  const js = gulp.src(paths.docsJS);
  return gulp
    .src(paths.docsIndex)
    .pipe(inject(css, { relative: true }))
    .pipe(inject(js, { relative: true }))
    .pipe(gulp.dest(paths.docs));
});
gulp.task("build", ["inject:docs"]);
