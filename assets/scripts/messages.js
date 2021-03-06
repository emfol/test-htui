
define( [ "jquery" ], function ( $ ) {
	return function () {

		$( function () {
			var selCls = "selected",
			    linksSel = "li.link > a",
				menu = $( "#menu > ul.items" ),
				links = menu.find( linksSel ),
				current = links.filter( "." + selCls );
			menu.on( "mouseover mouseout", linksSel, function ( e ) {
				links.removeClass( selCls );
				if ( e.type === "mouseover" ) {
					$( this ).addClass( selCls );
				} else if ( current.length === 1 ) {
					current.addClass( selCls );
				}
			} );
		} );

		/*
		 * DEBUG ONLY
		 * Press "A" to see PNG layout
		 * Press "B" to see HTML version
		 */
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
