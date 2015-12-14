
var gulp = require( "gulp" ),
	bower = require( "gulp-bower" );

gulp.task( "default", function () {
	console.log( "Oops! Nothing here..." );
} );

gulp.task( "bower", function () {
  return bower();
} );
