define([
	"jquery",
	"underscore",
	"backbone",
	"views/FirstView",
	"views/SecondView"
],function(
	$,
	_,
	Backbone,
	FirstView,
	SecondView
){
	var Result = Backbone.Router.extend({
		routes: {
			"" : "first",
			"first" : "first",
			"second" : "second",
		},
		first: function () {
			$("#mainContent").html(new FirstView().el);
		},
		second: function () {
			$("#mainContent").html(new SecondView().el);
		}
	});

	return Result;
});