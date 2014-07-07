define([
	'require',
	'angular',
	"bootstrap",
	"MyModule",
	"routes",
	"controllers/HelloController"
], function (require, angular) {


	require(['domReady!'], function (document) {
		angular.bootstrap(document, ['myApp']);
	});
});
