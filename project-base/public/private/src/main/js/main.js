require([
	"foundation",
	"BaseSync",
	"routers/MainRouter",
	"views/HeaderView"
], function(
	foundation,
	BaseSync,
	MainRouter,
	HeaderView
) {
	$(document).foundation();

	new MainRouter();
	Backbone.history.start();

	$("#header").html(new HeaderView().el);
});
