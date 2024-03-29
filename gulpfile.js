var gulp = require('gulp')
var sass = require('gulp-sass')(require('sass'));
var cleanCSS = require("gulp-clean-css")
var sourcemaps = require('gulp-sourcemaps')

var browserSync = require('browser-sync').create()

var imagemin = require("gulp-imagemin")

var ghpages = require("gh-pages")

sass.compiler = require('sass')

gulp.task("sass", function() {
  return gulp.src("src/css/app.scss")
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(
    cleanCSS({
      compatibility: 'ie8'
    })
  )
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream())
})

gulp.task("html", function () {
  return gulp.src("src/*.html")
  .pipe(gulp.dest("dist"))
})

gulp.task("fonts", function() {
  return gulp.src("src/fonts/*")
    .pipe(gulp.dest("dist/fonts"))

})

gulp.task("images", function() {
  return gulp.src("src/img/*")
  .pipe(imagemin())
  .pipe(gulp.dest("dist/img"))
})

gulp.task("js", function () {
  return gulp.src("src/*.js")
  .pipe(gulp.dest("dist"))
})

gulp.task("watch", function () {
  
  browserSync.init({
    server: {
      baseDir: "dist"
    }
  })



  gulp.watch("src/*.html", ["html"]).on("change", browserSync.reload)
  gulp.watch("src/css/app.scss", ["sass"])
  gulp.watch("src/fonts/*", ["fonts"])
  gulp.watch("src/img/*", ["images"])
  gulp.watch("src/*.js", ["js"])
})

gulp.task("deploy", function () {
  ghpages.publish("dist")
})

gulp.task('default', ["html", "sass", "fonts", "images", "js", "watch"])