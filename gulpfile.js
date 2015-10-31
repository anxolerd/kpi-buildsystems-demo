/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <me.olexandr.kovalchuk@gmail.com> wrote this file.  As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return.  Olexandr Kovalchuk
 * ----------------------------------------------------------------------------
 */

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var stylus = require('gulp-stylus');

gulp.task('scripts', [], function() {
    gulp.src('src/js/**/*.js')
        .pipe(plumber())
        .pipe(concat('my-script.js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('build/js'));
});

gulp.task('styles', [], function() {
    gulp.src('src/stylus/main.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('build/css'));
});

gulp.task('watch', ['scripts'], function(){
    gulp.watch('src/js/**/*.js', ['scripts']);
    gulp.watch('src/stylus/**/*.styl', ['styles']);
});

gulp.task('default', ['scripts', 'styles', 'watch']);
