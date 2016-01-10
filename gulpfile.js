'use strict';

var gulp = require('gulp'),
    connect = require('gulp-connect'),
    minifyHtml = require('gulp-minify-html'),
    minifyCss = require('gulp-minify-css'),
    sass = require('gulp-sass'),
    minify = require('gulp-minify'),
    concat = require('gulp-concat');

var source_paths = {
	html: './source/**/*.html',
	sass: './source/sass/*.sass',
	js: './source/js/**/*.js'
};

/**
 * Copia y minifica el index.html
 */
gulp.task('html', function () {
	return gulp.src(source_paths.html)
	    .pipe(minifyHtml({compatibility: 'ie8'}))
	    .pipe(gulp.dest('./dist'));
});

/**
 *Copia y minifica el css
 */
gulp.task('sass', function () {
	return gulp.src(source_paths.sass)
	    .pipe(sass().on('error', sass.logError))
	    .pipe(minifyCss({compatibility: 'ie8'}))
	    .pipe(gulp.dest('./dist/css'));
});

/**
 * Copia, merge y minificación de los archivos js
 */
gulp.task('js', function () {
	return gulp.src(source_paths.js)
	    .pipe(concat('app.js'))
	    .pipe(minify())
	    .pipe(gulp.dest('./dist/js'))
});
 
gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

gulp.task('reload', function () {
	return gulp.src('./dist/*.html')
	.pipe(connect.reload());
});
 
gulp.task('watch', ['html', 'sass', 'js', 'reload'], function () {
	gulp.watch(source_paths.html, ['html', 'reload']);
	gulp.watch(source_paths.sass, ['sass', 'reload']);
	gulp.watch(source_paths.js, ['js', 'reload']);
});

gulp.task('default', ['connect', 'watch']);