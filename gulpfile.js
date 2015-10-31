/*
 * ----------------------------------------------------------------------------
 * "THE BEER-WARE LICENSE" (Revision 42):
 * <me.olexandr.kovalchuk@gmail.com> wrote this file.  As long as you retain this notice you
 * can do whatever you want with this stuff. If we meet some day, and you think
 * this stuff is worth it, you can buy me a beer in return.  Olexandr Kovalchuk
 * ----------------------------------------------------------------------------
 */

var gulp = require('gulp');

gulp.task('hello-world', [], function() {
    console.log('it works!');
});

gulp.task('dependent', ['hello-world'], function(){
    console.log('i have dependencies');
});

gulp.task('pinkie', [], function(){
   console.log('Pinkie Pie');
});

gulp.task('default', ['pinkie', 'dependent']);
