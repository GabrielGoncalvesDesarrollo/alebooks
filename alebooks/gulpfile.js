const { src, dest, task, series, watch, parallel } = require('gulp');
var sass = require('gulp-sass')(require('sass-embedded'));


var postCss = require('gulp-clean-css');
var cleanCss = require('gulp-clean-css');
var autoprefixer = require( 'gulp-autoprefixer' ); 

// // JS related plugins
var uglify       = require( 'gulp-uglify' );
var babelify     = require( 'babelify' );
var browserify   = require( 'browserify' );
var source       = require( 'vinyl-source-stream' );
var buffer       = require( 'vinyl-buffer' );
var stripDebug   = require( 'gulp-strip-debug' );

// // Utility plugins
var rename       = require( 'gulp-rename' );
var sourcemaps   = require( 'gulp-sourcemaps' );
var notify       = require( 'gulp-notify' );

/* var options      = require( 'gulp-options' ); */
var gulpif       = require( 'gulp-if' );
var plumber = require('gulp-plumber');
var gutil = require('gulp-util');

var changed = require('gulp-changed');



const PRO = process.env.NODE_ENV === 'production' || false;

const config = {
	scss: './src/scss/app.scss',
	scssadmin: './src/scss/admin.scss',
	scsswatch: './src/scss/**/*.*',
	styledest	: './assets/css',
	adminstyledest	: './assets/css',
	images	: './assets/images/**/*.{jpg,jpeg,png,gif,svg}',
	imagesdest	: './assets/images',
	js	: './src/js/*.js',
	jsdest	: './assets/js',
}

var styleSRC   = 'src/scss/app.scss';
var styleAdminSRC   = 'src/scss/admin.scss';
var styleWatch = 'src/scss/**/*.scss';
var jsWatch    = 'src/js/**/*.js';
var phpWatch = ['**/*.php', 'dist/**/*.*', 'assets/**/*', '**/*.xml'];

var jsSRC   = 'src/js/';
var jsApp   = 'app.js';
var jsFiles = [jsApp];
var jsURL   = './assets/';


function js(done){
	jsFiles.map(function(entry){
		return browserify({
			entries: [jsSRC + entry]
		})
		.transform( babelify, { 
			global: true, //include all of the files in the root
      ignore: [/\/node_modules\/(?!swiper|dom7|ssr-window\/)/],
			presets: [ '@babel/preset-env' ] 
		} )
		.bundle()
		.on('error', function(err) {
			console.log(err);
			this.emit('end');
		})
		.pipe( plumber() )
		.pipe( source( entry ) )
		.pipe( buffer() )
		.pipe( gulpif( PRO, stripDebug() ) )
		.pipe( sourcemaps.init({ loadMaps: true }) )
		.pipe(rename("bundle.js"))
		.pipe( uglify() )
		.pipe( sourcemaps.write( '.' ) )
		.pipe( dest( config.jsdest ) );
	});	
	done();
}

function css(done){
	src([styleSRC, styleAdminSRC])
		/* .pipe(gulpif(!PRO, sourcemaps.init())) */
		.pipe( sass({
			errLogToConsole: true,
			outputStyle: 'compressed'
		}))
		.on( 'error', notify.onError())
		.pipe(autoprefixer({
			overrideBrowserslist: ['last 2 versions'],
			grid: true, // Mantén la opción grid: true
			cascade: false
		}))
		.pipe(postCss())
		.pipe(gulpif(PRO, cleanCss({ debug: true }, (details) => {
			console.log(`${details.name}: ${details.stats.originalSize}`);
			console.log(`${details.name}: ${details.stats.minifiedSize}`);        
		})))
		/* .pipe(gulpif(!PRO, sourcemaps.write())) */
		.pipe(dest(config.styledest));
	done();
}

function admin(done){
	src([styleAdminSRC])
		.pipe(gulpif(!PRO, sourcemaps.init()))
		.pipe( sass({
			errLogToConsole: true,
			outputStyle: 'compressed'
		}))
		.on( 'error', notify.onError())
		.pipe(autoprefixer({ grid: true }))
		.pipe(postCss())
		.pipe(gulpif(PRO, cleanCss({ debug: true }, (details) => {
			console.log(`${details.name}: ${details.stats.originalSize}`);
			console.log(`${details.name}: ${details.stats.minifiedSize}`);        
		})))
		.pipe(gulpif(!PRO, sourcemaps.write()))
		.pipe(dest(config.styledest));
	done();
}

function copy() {
	gutil.log('Copying files ...');
	return src([
		'**',
		'!.vscode',
		'!node_modules',
		'!node_modules/**',
		'!dist',
		'!dist/**',
		'!src',
		'!src/**',
		'!.gitignore',
		'!package.json',
		'!package-lock.json',
		'!gulpfile.js',
		'!README.md',
		'!webpack.config.js'
	])
		.pipe(changed('dist'))
		.pipe(dest('dist'));
}

function watchFiles(){
	watch(styleWatch, css);
	watch(jsWatch, js );
	watch(phpWatch, copy);
}

task('css', css);
task('js', js);
task('admin', admin);
task('copy', copy);
task('default', series(parallel(css, js, copy), watchFiles));
/* task('default', series(js, css)); */