define([
	"jquery",
	"underscore",
	"backbone",
	"text!../../html/third-item.html"
],function(
	$,
	_,
	Backbone,
	templateHtml
){
	var Result = Backbone.View.extend({
		template : _.template(templateHtml),
		initialize : function() {
			this.render();
		},
		render : function() {
			$(this.el).html(this.template({
				model:this.model
			}));

			return this;
		}
	});

	return Result;
});