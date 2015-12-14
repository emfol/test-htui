
define( [ "jquery" ], function ( $ ) {
	return function () {

		$( "#menu > ul.items" ).on( "click", "li.link > a", function () {
			$( this ).toggleClass( "selected" );
		} )

		$( "body" ).on( "keydown", function ( e ) {
			var container, overlay;
			if ( e.keyCode === 65 || e.keyCode === 66 ) {
				container = document.getElementById( "container" );
				overlay = document.getElementById( "layout-overlay" );
				if ( !overlay ) {
					overlay = document.createElement( "img" );
					overlay.id = "layout-overlay";
					overlay.src = "/assets/images/temp.png";
					overlay.style.display = "block";
					overlay.style.position = "relative";
					overlay.style.margin = "0 auto";
					document.body.appendChild( overlay );
				}
				if ( e.keyCode === 65 ) {
					overlay.style.display = "block";
					container.style.display = "none";
				} else {
					overlay.style.display = "none";
					container.style.display = "block";
				}
			}
		} );

	};
} );
