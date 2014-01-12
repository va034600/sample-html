define([
	"jquery",
	"underscore",
	"backbone",
	"views/IndexView",
	"views/FirstView",
	"views/SecondView"
],function(
	$,
	_,
	Backbone,
	IndexView,
	FirstView,
	SecondView
){
	var Result = Backbone.Router.extend({
		routes: {
			"" : "index",
			"index" : "index",
			"first" : "first",
			"second" : "second",
		},
		index: function () {
			$("#mainContent").html(new IndexView().el);
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