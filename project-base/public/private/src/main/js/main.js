require([
	"BaseSync",
	"routers/MainRouter"
], function(
	BaseSync,
	MainRouter
) {
	new MainRouter();
	Backbone.history.start();
});
