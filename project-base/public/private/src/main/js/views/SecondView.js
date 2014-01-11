define([
	"jquery",
	"underscore",
	"backbone",
	"text!../../html/second-view.html",
],function(
	$,
	_,
	Backbone,
	templateHtml
){
	var Result = Backbone.View.extend({
		template : _.template(templateHtml),
		events : {
			"click .move-button" : "onClickByMoveButton"
		},
		initialize : function() {
			this.render();
		},
		render : function() {
			$(this.el).html(this.template());
			return this;
		},
		onClickByMoveButton:function(event){
			Backbone.history.navigate("first", {
				trigger : true
			});
		}
	});

	return Result;
});