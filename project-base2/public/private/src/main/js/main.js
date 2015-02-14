define([
	'require',
	'angular',
	"bootstrap",
	"MyModule",
	"routes"
], function (require, angular) {


	require(['domReady!'], function (document) {
		angular.bootstrap(document, ['myApp']);
	});
});
