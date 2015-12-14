/* global require, module */

var globalNavigation = [
	{ type: "link", title: "Mercado", href: "#", decoration: "market" },
	{ type: "link", title: "Produtos", href: "#", decoration: "products" },
	{ type: "link", title: "Vendas", href: "#", decoration: "sales", selected: true },
	{ type: "link", title: "Compras", href: "#", decoration: "orders" }
];

function root( req, res ) {
	res.redirect( "/messages" );
}

function home( req, res ) {
	res.render( "home", {
		navigation: globalNavigation
	} );
}

function messages( req, res ) {
  res.render( "messages", {
	  title: "Messages",
	  stylesheet: "messages",
	  script: "messages",
	  navigation: globalNavigation
  } );
}

module.exports = {
	"/": { "get": root },
	"/home": { "get": home },
	"/messages": { "get": messages, "post": messages }
};
