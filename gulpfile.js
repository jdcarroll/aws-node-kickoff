/**
* aws-node-kickoff - Gulp Setup
**/
var gulp = require('gulp');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var nodemon = require('gulp-nodemon');
var uglify = require('gulp-uglifyjs');
var open = require('gulp-open');

gulp.task('styles', function(){
    return gulp.src('./styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/css'))
        .pipe(notify({ message: 'Styles Task Complete'}))
});

gulp.task('scripts', function(){
    gulp.src(['scripts/*.js'])
        .pipe(uglify('app.js',{
            mangle: false,
            compress: false,
            output: {
                beautify: true,
            }
        }))
        .pipe(gulp.dest('public/js'))
        .pipe(notify({ message: 'Front End Scripts Task Complete'}))
})

gulp.task('watch', function(){
    gulp.watch('styles/*.scss', ['styles']);
    gulp.watch('scripts/*.js', ['scripts']);
})

gulp.task('nodemon', function(){
    nodemon({
        script: 'index.js',
        ext: 'js html',
        env: { 'NODE_ENV': 'development' }
    })
});

gulp.task('app', function(){
   var options = {
        uri: 'http://localhost:4000',
   }
    gulp.src(__filename)
    .pipe(open(options));
});

gulp.task('default', function(){
    gulp.start('watch','scripts','styles','nodemon', 'app')
})
