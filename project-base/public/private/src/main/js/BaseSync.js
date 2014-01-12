define([
	"jquery",
	"underscore",
	"backbone"
],function(
	$,
	_,
	Backbone
){
	Backbone._sync = Backbone.sync;

	Backbone.sync = function (method, model, options) {
		// if(!model.isUrlExtend){
		// 	model.url = "/private/api" + model.url;
		// 	model.isUrlExtend = true;
		// }
		model.url = "/private/api" + model.urlRoot;

		return Backbone._sync( method, model, options );
	};
});