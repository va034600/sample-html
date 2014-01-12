define([
	"jquery",
	"underscore",
	"backbone",
	"text!../../html/first-view.html",
	"models/UserCollection"
],function(
	$,
	_,
	Backbone,
	templateHtml,
	UserCollection
){
	var Result = Backbone.View.extend({
		template : _.template(templateHtml),
		options : {
			userCollection : new UserCollection()
		},
		events : {
			"click .move-button" : "onClickByMoveButton"
		},
		initialize : function() {
			this.listenTo(this.options.userCollection, 'sync', this.render);

			this.options.userCollection.fetch();
		},
		render : function() {
			$(this.el).html(this.template());

			this.options.userCollection.each(function(model) {
				this.$('.notes').html(this.$('.notes').html() + " " + model.get("name"));
			});
			return this;
		},
		onClickByMoveButton:function(event){
			Backbone.history.navigate("second", {
				trigger : true
			});
		}
	});

	return Result;
});