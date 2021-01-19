const gulp = require('gulp');
const browserSync = require('browser-sync').create();



function watch () {
    browserSync.init({
        server: {
            baseDir: './docs'
        }
    })
    gulp.watch('./docs/*.html').on('change', browserSync.reload); //for clean html only
}

gulp.task('default', function () {
    watch(); //for gulp start
})

exports.watch = watch; //for gulp watch start