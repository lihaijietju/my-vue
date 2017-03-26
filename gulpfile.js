var gulp = require('gulp');
var rimraf = require('gulp-rimraf');
var minifyHTML = require('gulp-minify-html');

// 清空构建目录
gulp.task('clean', function() {
    return gulp.src('dist', {
        read: false
    })
        .pipe(rimraf());
});

gulp.task('minHtml', function() {
    return gulp.src('./dist/index.html')
        .pipe(minifyHTML({
            comments: false,
            spare: false,
            quotes: true
        }))
        .pipe(gulp.dest('./dist'));
});
