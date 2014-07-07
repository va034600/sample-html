define(['MyModule'], function (app) {
    'use strict';

    return app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/view1', {
			templateUrl: 'html/page1.html',
			controller: function($scope, $location){
			}
		});
		$routeProvider.when('/view2', {
			templateUrl: 'html/page2.html',
			controller: function($scope, $location){
			}
		});
    }]);
});
