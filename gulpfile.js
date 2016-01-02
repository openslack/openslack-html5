'use strict';

// requirements
var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    size = require('gulp-size'),
    clean = require('gulp-clean');


// tasks
gulp.task('transform', function () {
  return gulp.src('./openslack/static/jsx/app.js')
    .pipe(browserify({transform: ['reactify']}))
    .pipe(gulp.dest('./openslack/static/js/'))
    .pipe(size())
});


gulp.task('clean', function () {
    return gulp.src(['./openslack/static/scripts/js'], {read: false})
    .pipe(clean())
});


gulp.task('default', ['clean'], function () {
    gulp.start('transform')
    gulp.watch('./openslack/static/jsx/app.js', ['transform'])
});