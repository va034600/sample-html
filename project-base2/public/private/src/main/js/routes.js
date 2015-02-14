define([
	'MyModule',
	"controllers/Page1Controller",
	"controllers/Page2Controller"
], function (MyModule) {
	'use strict';

	return MyModule.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
		//$locationProvider.html5Mode(true);

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
		$routeProvider.otherwise({redirectTo: '/view1'});
	}]);
});
