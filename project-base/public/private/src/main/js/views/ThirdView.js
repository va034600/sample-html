define([
	"jquery",
	"underscore",
	"backbone",
	"text!../../html/third.html",
	"i18n!nls/Messages",
	"models/UserCollection",
	"views/ThirdItemView"
],function(
	$,
	_,
	Backbone,
	templateHtml,
	Messages,
	UserCollection,
	ThirdItemView
){
	var Result = Backbone.View.extend({
		template : _.template(templateHtml),
		options : {
			userCollection : new UserCollection()
		},
		initialize : function() {
			this.listenTo(this.options.userCollection, 'sync', this.render);

			$(this.el).html(this.template());

			this.options.userCollection.fetch();
		},
		render : function() {
			$('.notes', this.el).empty();
			this.options.userCollection.each(function(model) {
				$('.notes', this.el).append(new ThirdItemView({
					model : model
				}).el);
			});
			return this;
		}
	});

	return Result;
});