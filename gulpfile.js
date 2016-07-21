'use strict';

var path = require('path'),
    gulp = require('gulp'),
    ts = require('gulp-typescript');

gulp.task('buildServer', function() {
    var tsProject = ts.createProject(path.resolve('./server/tsconfig.json'));
    return gulp.src(path.resolve('./server/**/*.ts'))
        .pipe(ts(tsProject))
        .js
        .pipe(gulp.dest(path.resolve('./server')))
});