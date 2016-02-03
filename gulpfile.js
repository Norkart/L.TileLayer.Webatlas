var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pkg = require('./package.json');
var header = require('gulp-header');

var banner = ['/**',
  ' * <%= pkg.name %> - <%= pkg.description %>',
  ' * @version v<%= pkg.version %>',
  ' * Copyright: Norkart AS',
  ' */',
  ''].join('\n');


gulp.task('dist', function() {
  return gulp.src('src/*.js')
    .pipe(uglify())
    .pipe(header(banner, { pkg : pkg } ))
    .pipe(gulp.dest('dist'));
});