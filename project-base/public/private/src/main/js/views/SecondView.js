define([
	"jquery",
	"underscore",
	"backbone",
	"text!../../html/second.html",
	"models/UserModel"
],function(
	$,
	_,
	Backbone,
	templateHtml,
	UserModel
){
	var Result = Backbone.View.extend({
		template : _.template(templateHtml),
		options : {
			userModel : new UserModel()
		},
		events : {
			"click .move-button" : "onClickByMoveButton"
		},
		initialize : function() {
			this.listenTo(this.options.userModel, 'sync', this.render);

			this.options.userModel.fetch({data:{id:2}});
		},
		render : function() {
			$(this.el).html(this.template({ 
				model:this.options.userModel
			}));
			return this;
		},
		onClickByMoveButton:function(event){
			Backbone.history.navigate("index", {
				trigger : true
			});
		}
	});

	return Result;
});