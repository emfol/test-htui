/* global require, module */

var globalNavigation = [
	{ type: "link", title: "Mercado", href: "#", decoration: "market" },
	{ type: "link", title: "Produtos", href: "#", decoration: "products" },
	{ type: "link", title: "Vendas", href: "#", decoration: "sales", selected: false },
	{ type: "link", title: "Compras", href: "#", decoration: "orders" }
];

function home( req, res ) {
	res.render( "home", {
		navigation: globalNavigation
	} );
}

function messages( req, res ) {
  res.render( "messages", {
	  title: "Messages",
	  stylesheet: "messages",
	  navigation: globalNavigation
  } );
}

module.exports = {
	"/home": { "get": home },
	"/messages": { "get": messages }
};
