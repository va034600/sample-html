define([
	"jquery",
	"underscore",
	"backbone",
	"text!../../html/index.html",
],function(
	$,
	_,
	Backbone,
	templateHtml
){
	var Result = Backbone.View.extend({
		template : _.template(templateHtml),
		events : {
			"click .first-button" : "onClickByFirstButton",
			"click .second-button" : "onClickBySecondveButton"
		},
		initialize : function() {
			this.render();
		},
		render : function() {
			$(this.el).html(this.template());
			return this;
		},
		onClickByFirstButton:function(event){
			Backbone.history.navigate("first", {
				trigger : true
			});
		},
		onClickBySecondveButton:function(event){
			Backbone.history.navigate("second", {
				trigger : true
			});
		}
	});

	return Result;
});