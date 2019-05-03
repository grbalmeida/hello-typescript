const { series, parallel, src, dest } = require('gulp')
const del = require('del')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const tsify = require('tsify')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')

function clearDist(callback) {
    return del(['dist'])
}

function copyHTML(callback) {
    return src('public/**/*')
        .pipe(dest('dist'))
}

function generateJS(callback) {
    return browserify({
        basedir: '.',
        entries: ['src/main.ts']
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(dest('dist'))
}

function generateJSProduction(callback) {
    return src('dist/app.js')
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(dest('dist'))
}

exports.default = series(
    clearDist,
    parallel(generateJS, copyHTML),
    generateJSProduction
)