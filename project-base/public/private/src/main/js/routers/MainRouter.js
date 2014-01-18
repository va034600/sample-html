define([
	"jquery",
	"underscore",
	"backbone",
	"views/IndexView",
	"views/FirstView",
	"views/SecondView",
	"views/ThirdView"
],function(
	$,
	_,
	Backbone,
	IndexView,
	FirstView,
	SecondView,
	ThirdView
){
	var Result = Backbone.Router.extend({
		routes: {
			"" : "index",
			"index" : "index",
			"first" : "first",
			"second" : "second",
			"third" : "third"
		},
		index: function () {
			$("#mainContent").html(new IndexView().el);
		},
		first: function () {
			$("#mainContent").html(new FirstView().el);
		},
		second: function () {
			$("#mainContent").html(new SecondView().el);
		},
		third: function () {
			$("#mainContent").html(new ThirdView().el);
		}
	});

	return Result;
});