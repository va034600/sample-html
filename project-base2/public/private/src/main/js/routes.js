define(['MyModule'], function (app) {
	'use strict';

	return app.config(['$routeProvider', function ($routeProvider) {
		$routeProvider.when('/view1', {
			templateUrl: 'html/page1.html'
		});
		$routeProvider.when('/view2', {
			templateUrl: 'html/page2.html',
			controller: function ($scope, $location) {
				$('nav.affix-nav').affix({
					offset: {
						top: 300,
						bottom: 300
					}
				}).on('affix.bs.affix', function () {
					$(this).css({
						'top': '0'
					});
					console.log('affix.bs.affix');
				}).on('affixed.bs.affix', function () {
					console.log('affixed.bs.affix');
				}).on('affix-bottom.bs.affix', function () {
					console.log('affix-bottom.bs.affix');
				}).on('affixed-bottom.bs.affix', function () {
					console.log('affixed-bottom.bs.affix');
				});

				$('body').scrollspy({ target: 'nav.affix-nav' })
			}
		});
		$routeProvider.when('/view3', {
			templateUrl: 'html/page3.html'
		});
	}]);
});
