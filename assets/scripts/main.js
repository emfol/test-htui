
require.config( {
	baseUrl: "/assets/scripts",
	paths: {
		"jquery": "vendor/jquery/dist/jquery.min"
	}
});

require( [ "jquery" ], function( $ ) {
	var module = $( "body" ).attr( "data-script" );
	if ( typeof module === "string" && module.length > 0 ) {
		require( [ module ], function ( module ) {
			if ( typeof module === "function" ) {
				module();
			}
		} );
	}
} );
