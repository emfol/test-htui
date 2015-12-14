/* global require, module */

var express = require( "express" ),
	controllers = require( "./controllers" ),
	router = express.Router(),
	controller,
	method,
	route;

for ( route in controllers ) {
	controller = controllers[ route ];
	for ( method in controller ) {
		router[ method ]( route, controller[ method ] );
	}
}

module.exports = router;
