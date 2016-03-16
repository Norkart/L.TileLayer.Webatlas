var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pkg = require('./package.json');
var header = require('gulp-header');
var rename = require('gulp-rename');
var sync = require('gulp-config-sync');
var tag_version = require('gulp-tag-version');
var git = require('gulp-git');
var bump = require('gulp-bump');
var filter = require('gulp-filter');

var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * Copyright: Norkart AS',
  ' */',
  ''].join('\n');


gulp.task('dist', function() {
  return gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(header(banner, {pkg: pkg}))
    .pipe(rename({
        suffix: '.min'
     }))
    .pipe(gulp.dest(''));
});

gulp.task('sync', function() {
  gulp.src(['bower.json'])
    .pipe(sync())
    .pipe(gulp.dest('.')); // write it to the same dir 
});

function inc(importance) {
    // get all the files to bump version in 
    return gulp.src(['./package.json', './bower.json'])
        // bump the version number in those files 
        .pipe(bump({type: importance}))
        // save it back to filesystem 
        .pipe(gulp.dest('./'))
        // commit the changed version number 
        .pipe(git.commit('bumps package version'))
        // read only one file to get the version number 
        .pipe(filter('package.json'))
        // **tag it in the repository** 
        .pipe(tag_version());
}
 
gulp.task('patch', function() { return inc('patch'); });
gulp.task('feature', function() { return inc('minor'); });
gulp.task('release', function() { return inc('major'); });