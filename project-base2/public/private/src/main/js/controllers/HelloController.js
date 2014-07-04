define([
	'angular'
], function (angular) {
	'use strict';

	var result = function ($scope) {
		$scope.greeting = { text: 'Hello' };
	}

	var myApp = angular.module('myApp', []);
	myApp.controller('HelloController', ['$scope', result]);
});