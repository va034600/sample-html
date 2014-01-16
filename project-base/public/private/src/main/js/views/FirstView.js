define([
	"jquery",
	"underscore",
	"backbone",
	"text!../../html/first.html",
	"i18n!nls/Messages",
	"models/UserCollection"
],function(
	$,
	_,
	Backbone,
	templateHtml,
	Messages,
	UserCollection
){
	var Result = Backbone.View.extend({
		options : {
			userCollection : new UserCollection()
		},
		events : {
			"click .move-button" : "onClickByMoveButton"
		},
		initialize : function() {
			this.listenTo(this.options.userCollection, 'sync', this.render);

			$(this.el).html(templateHtml);
			this.options.userCollection.fetch();
		},
		render : function() {
			var template1 = _.template($("#template-item").html());

			this.$('.notes').empty();
			this.options.userCollection.each(function(model) {
				this.$('.notes').append(template1({
					model:model,
					sample:Messages.first.message
				}));
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