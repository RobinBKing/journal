var browserify = require('browserify');
var source = require('vinyl-source-stream');
var concat = require('gulp-concat');

// gulp.task('concatInterface', function() {
//   return gulp.src(['./js/browser.js', './js/dateStamp.js'])
//     .pipe(concat('allConcat.js'))
//     .pipe(gulp.dest('./tmp'));
// });

gulp.task('jsBrowserify', function() {
  return browserify({ entries: ['./js/browser.js'] })
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'));
});
