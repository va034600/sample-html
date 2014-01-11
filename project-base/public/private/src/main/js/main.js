require([
	"routers/MainRouter"
], function(
	MainRouter
) {
	new MainRouter();
	Backbone.history.start();
});
