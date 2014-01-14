require([
	"foundation",
	"BaseSync",
	"routers/MainRouter"
], function(
	foundation,
	BaseSync,
	MainRouter
) {
	$(document).foundation();
	new MainRouter();
	Backbone.history.start();
});
