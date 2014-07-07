define([
	'MyModule',
	"controllers/Page1Controller",
	"controllers/Page2Controller"
], function (app) {
	'use strict';

	return app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/view1', {
			templateUrl: 'html/page1.html'
		});
		$routeProvider.when('/view2', {
			templateUrl: 'html/page2.html',
			controller: "Page2Controller"
		});
		$routeProvider.when('/view3', {
			templateUrl: 'html/page3.html'
		});
		$routeProvider.when('/view4', {
			templateUrl: 'html/page4.html'
		});
	}]);
});
