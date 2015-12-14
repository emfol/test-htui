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

	var messages = [
		{ author: "Rodrigo", title: "Message 1..." },
		{ author: "Claudio", title: "Message 2..." },
		{ author: "Bernardo", title: "Message 3..." },
		{ author: "Josiane", title: "Message 4..." },
		{ author: "Emanuel", title: "Message 5..." },
		{ author: "Izabela", title: "Message 6..." }
	];

	res.render( "messages", {
		title: "Messages",
		stylesheet: "messages",
		script: "messages",
		messages: messages,
		navigation: globalNavigation
	} );
}

module.exports = {
	"/": { "get": root },
	"/home": { "get": home },
	"/messages": { "get": messages, "post": messages }
};
