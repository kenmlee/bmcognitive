var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

var bsConfig = require('./bs-config');

gulp.task('browser-sync', ['nodemon'], function(){
  browserSync.init(bsConfig);
});

gulp.task('default', ['browser-sync'], function(){
  gulp.watch(["./app/**/*.(html|ts|css)"], reload);
});

gulp.task('nodemon', function(cb){
  var callbackCalled = false;
  return nodemon({script: 'server.js'}).on('start', function(){
    if(!callbackCalled) {
      callbackCalled = true;
      cb();
    }
  });
});