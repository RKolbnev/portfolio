'use strict';

const gulp = require('gulp');
const webpack = require('webpack-stream');
const gulpSass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browsersync = require("browser-sync");

gulp.task('css', () => {
  return gulp.src("./src/sass/main.sass")
    .pipe(gulpSass({
        errorLogToConsole: true,
        outputStyle: "compressed",
      }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/'))
    .pipe(browsersync.stream())
})

gulp.task('html', () => {
  return gulp.src("./src/index.html")
    .pipe(gulp.dest('./dist/'))
    .pipe(browsersync.stream())
})

gulp.task('fonts', () => {
  return gulp.src("./src/fonts/Roboto/*")
    .pipe(gulp.dest('./dist/fonts'))
    .pipe(browsersync.stream())
})

gulp.task('js', () => {
  return gulp
    .src("./src/js/index.js")
    .pipe(
      webpack({
        mode: "development",
        output: {
          filename: "main.js",
        },
        watch: false,
        devtool: "source-map",
        // plugins: ["@babel/plugin-transform-runtime"],
        module: {
          rules: [
            {
              test: /\m?.js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: [
                    [
                      "@babel/preset-env",
                      {
                        targets: "> 0.25%, not dead",
                      },
                    ],
                  ],
                },
              },
            },
          ],
        },
      })
    )
    .pipe(gulp.dest("./dist/"))
    .on("end", browsersync.reload);
})

gulp.task("img", () => {
  return gulp
    .src("./src/img/*")
    .pipe(gulp.dest("./dist/img"))
    .pipe(browsersync.stream());
});

gulp.task("icon", () => {
  return gulp
    .src('./src/font-awesome/**/**')
    .pipe(gulp.dest("./dist/icons"))
    .pipe(browsersync.stream());
})

gulp.task('watch', () => {
  browsersync.init({
    server: './dist/',
    port: 4000,
    notify: true
  });

  gulp.watch('./src/img/*', gulp.parallel('img'));
  gulp.watch('./src/index.html', gulp.parallel('html'));
  gulp.watch('./src/sass/**/*.sass', gulp.parallel('css'));
  gulp.watch('./src/js/**/*.js', gulp.parallel('js'));
})

gulp.task('dev', gulp.parallel('html', 'css', 'icon', 'js', 'img', 'fonts'));

gulp.task('default', gulp.parallel('watch', 'dev'));

