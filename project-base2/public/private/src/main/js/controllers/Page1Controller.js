define([
	'MyModule'
], function (MyModule) {
	'use strict';

	MyModule.controller('Page1Controller', ['$scope', function ($scope) {
		$scope.greeting = { text: 'Hello' };
	}]);
});