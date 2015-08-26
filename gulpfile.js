var gulp = require('gulp');
var express = require('express');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var del = require('del');

var projectFile = 'cast';


var port = 4000;

gulp.task('express', function(){
	
	var app = express();
	app.use(require('connect-livereload')({port: 4002}));
	app.use(express.static(__dirname));
	app.listen(port);

});

gulp.task('clean:dest', function(cb){

  del('./dest', cb);

});

gulp.task('build', ['clean:dest'], function(){

  return gulp.src('src' + projectFile + '.js')
           .pipe(gulp.dest('dest'))
           .pipe(rename(function(path){
             path.extname = ".min.js";
           }))
           .pipe(gulp.dest('dest/js'));

});

gulp.task('watch', function() {

  gulp.watch('index.html', notifyLiveReload);
  gulp.watch('src/js/*.js', notifyLiveReload);

});


var tinylr;
gulp.task('livereload', function() {
  tinylr = require('tiny-lr')();
  tinylr.listen(4002);
});

function notifyLiveReload(event) {
  var fileName = require('path').relative(__dirname, event.path);

  tinylr.changed({
    body: {
      files: [fileName]
    }
  });
}

gulp.task('server', ['express', 'livereload', 'watch'], function(){
  console.log('Awesomeness happens at local port: ' + port);
});