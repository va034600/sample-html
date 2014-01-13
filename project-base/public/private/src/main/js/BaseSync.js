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
		model.url = "/private/api" + model.urlRoot;

		return Backbone._sync( method, model, options );
	};
});