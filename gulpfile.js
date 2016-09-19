var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var combinemq = require('gulp-combine-mq');

var paths = {
    images: 'resources/images/**/*.{jpg,png,gif,svg}',
    sass: "resources/styles/**/*.scss",
    dist: 'dist',
    dist_css: 'dist/*.css',
    docs_css: 'docs/css'
};

//////////////////////////////
// ASSETS
function copy() {
    gulp.src(paths.dist_css)
        .pipe(gulp.dest(paths.docs_css));
}

gulp.task('copy', function () {
    copy();
});

//////////////////////////////
// DEV
gulp.task('sass', function () {
    return gulp.src("resources/styles/flex-grid-lists.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({sourceMap: true}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.dist));
});

gulp.task('dev', ['sass'], copy);

gulp.task('watch', ['dev'], function () {
    gulp.watch(paths.sass, ['dev']);
});

//////////////////////////////
// PRODUCTION
gulp.task('min-sass', function(){
    return gulp.src("resources/styles/flex-grid-lists.scss")
        .pipe(sass())
        .pipe(combinemq({beautify: false}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(rename('flex-grid-lists.min.css'))
        //.pipe(nano())
        .pipe(gulp.dest(paths.dist));
});

gulp.task('prod', ['min-sass'], copy);

//////////////////////////////
// DEFAULT
gulp.task('default', ['prod']);