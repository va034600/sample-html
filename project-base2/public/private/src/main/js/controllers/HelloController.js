define([
	'MyModule'
], function (MyModule) {
	'use strict';

	MyModule.controller('HelloController', ['$scope', function ($scope) {
		$scope.greeting = { text: 'Hello' };
	}]);
});