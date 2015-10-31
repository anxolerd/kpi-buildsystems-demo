# Build systems demo app

This is a demo application for my [slides about build systems](http://anxolerd.github.io/kpi-slides-buildsystems).
This app was remastered after the demonstration to look better and have a verbose guide.

## Some conventions
1. This is a small application that consists of
    - 3 html pages
    - some simple javascript
    - styles written in `stylus`
2. Branching
    - There is a project structure in the `master` branch.
    - `Gulp` powered version is in the `gulp` branch. There is also a guide for setting up [Gulp](http://gulpjs.com) build system

## Steps
### Preparations
#### Install gulp
```[bash]
# npm i -g gulp # install it globally
$ npm i gulp --save-dev # install it for project
```

#### Install gulp modules
```[bash]
$ npm i gulp-concat gulp-plumber gulp-stylus gulp-uglify gulp-rename del browser-sync --save-dev
```

#### Create gulpfile.js in your project root and add there required tasks
```[bash]
$ touch gulpfile.js
```

### Writing gulpfile
#### Simple gulp task
```[javascript]
var gulp = require('gulp');
gulp.task('demo', [], function() {
    console.log('It works!');
});
```
Run it with
```[bash]
$ gulp demo # demo is the taskname you want to run
```

#### Dependent tasks
```[javascript]
var gulp = require('gulp');
gulp.task('dependency', [], function(){
    console.log('hello from dependency!');
});

gulp.task('demo', ['dependency'], function() {
    console.log('It works!');
});

```

Run it as in the previous example.

#### Default tasks
Default task is the task that will be run when you call
```[bash]
$ gulp
```
Usually it is task with the empty callback function, but which have all (or almost all) other tasks as dependencies
```[javascript]
var gulp = require('gulp');
gulp.task('task1', [], function(){
    console.log('hello from task1');
});

gulp.task('task2', [], function(){
    console.log('hello from task2');
});


gulp.task('default', ['task1', 'task2']);

```

#### Copying files
```[javascript]
var gulp = require('gulp');
gulp.task('copy-file', [], function(){
    gulp.src('path/to/my/file')
    .pipe(gulp.dest('destination/path/here'))
});
```

#### Globs
You can process multiple files at once using globs in `gulp.src`

```[javascript]
var gulp = require('gulp');
gulp.task('copy-file', [], function(){
    gulp.src('my/**/*.glob')
    .pipe(gulp.dest('destination/path/here'))
});
```

Look [here](https://github.com/isaacs/node-glob#glob-primer) for glob examples and explanations

#### Let minify our javascript
Here we will need `gulp-uglify` package:
```[javascript]
var gulp = require('gulp');
var uglify = require('gulp-uglify);

gulp.task('scripts', [], function(){
    gulp.src('src/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
});
```
Look [here](https://www.npmjs.com/package/gulp-uglify) for mor info

#### One big js file to include them all
Here we will need `gulp-concat` package:
```[javascript]
var gulp = require('gulp');
var uglify = require('gulp-uglify);
var concat = require('gulp-concat);

gulp.task('scripts', [], function(){
    gulp.src('src/**/*.js')
    .pipe(concat('bundle.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
});
```

Look [here](https://www.npmjs.com/package/gulp-concat) for mor info

#### Big GULP is watching you!
We want to detect changes in source files and rebuild our project automatically

```[javascript]
...

gulp.task('watch', ['scripts'], function(){
    gulp.watch('src/js/**/*.js', ['scripts'])
});

gulp.task('default', ['scripts', 'watch']);
```

#### Make some style

We use `stylus` in our project. So we will need `gulp-stylus` tu build our stylesheets
```[javascript]
var stylus = require('gulp-stylus');

...

gulp.task('styles', [], function(){
    gulp.src('src/stylus/main.styl')
    .pipe(stylus())
    .pipe(gulp.dest('build/css'));
});

...

// Do not forget to add watcher
gulp.task('watch', ['scripts', 'styles'], function() {
    gulp.watch('src/stylus/**/*.styl', ['styles'])
    gulp.watch('src/js/**/*.js', ['scripts'])
});

...

gulp.task('default', ['scripts', 'styles', 'watch']);
```

## What's next?
Check out this project for more interesting stuff. And do not forget to [google](http://google.com) if something interested you.
