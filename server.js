/* global __dirname, require, console */

var express = require( "express" ),
	less = require( "express-less" ),
	handlebars = require( "express-handlebars" ),
	router = require( "./router" ),
	app = express(),
	host = "localhost",
	port = 8080,
	server;

/*
 * Static Content + Less CSS Files
 */
app.use( "/assets/images", express.static( "assets/images" ) );
app.use( "/assets/fonts", express.static( "assets/fonts" ) );
app.use( "/assets/scripts", express.static( "assets/scripts" ) );
app.use( "/assets/styles", less( __dirname + '/assets/less-css', { "compress": false } ) );

/*
 * Template Engine
 */
handlebars = handlebars.create( {
	"defaultLayout": "main"
} );
app.engine( "handlebars", handlebars.engine );
app.set( "view engine", "handlebars" );

/*
 * Routes
 */
app.use( router );

server = app.listen( port, host, function () {
	console.log( "Server running @ http://%s:%s", host, port );
} );
