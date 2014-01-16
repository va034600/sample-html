define([
	"jquery",
	"underscore",
	"backbone",
	"text!../../html/header.html"
],function(
	$,
	_,
	Backbone,
	templateHtml
){
	var Result = Backbone.View.extend({
		initialize : function() {
			this.render();
		},
		render : function() {
			$(this.el).html(templateHtml);
			$(this.el).foundation();
			return this;
		}
	});

	return Result;
});