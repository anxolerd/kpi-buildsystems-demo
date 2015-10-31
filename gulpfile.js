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
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var del = require('del');

gulp.task('html', [], function() {
    gulp.src('src/**/*.html')
        .pipe(gulp.dest('build'))
        .pipe(reload({stream:true}));
});

gulp.task('images', [], function() {
    return (
        gulp.src('src/img/*.+(png|jpg|gif)')
            .pipe(imagemin({
                optimizationLevel: 3,
                progessive: true,
                interlaced: true
            }))
            .pipe(gulp.dest('build/img'))
            .pipe(reload({stream:true}))
    );
});

gulp.task('scripts', [], function() {
    gulp.src('src/js/**/*.js')
        .pipe(plumber())
        .pipe(concat('my-script.js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('build/js'))
        .pipe(reload({stream:true}));
});

gulp.task('styles', [], function() {
    gulp.src('src/stylus/main.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('build/css'))
        .pipe(reload({stream:true}));
});

gulp.task('browser-sync', [], function() {
    gulp.task('browser-sync', function() {
        browserSync({
            server: {
                baseDir: './build/'
            }
        });
    });
});

gulp.task('clean', [], function(callback) {
    return del(['build'], callback);
});

gulp.task('watch', ['scripts', 'styles', 'html', 'images'], function() {
    gulp.watch('src/js/**/*.js', ['scripts']);
    gulp.watch('src/stylus/**/*.styl', ['styles']);
    gulp.watch('src/**/*.html', ['html']);
    gulp.watch('src/img/**/*.+(png|jpg|gif)', ['images']);
});

gulp.task('default', ['scripts', 'styles', 'html', 'images', 'browser-sync', 'watch']);
