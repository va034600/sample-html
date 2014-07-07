define(['angular', "angular_route", "controllers/HelloController", "bootstrap"],function(angular) {








 

	require(['requirejs_domready!', "routes"], function (document) {
		angular.bootstrap(document, ['myApp']);

		$('nav.affix-nav').affix({
			offset:{
				top: 300,
				bottom:300
			}
		}).on('affix.bs.affix', function () {
			$(this).css({
				'top': '0'
			});
			console.log('affix.bs.affix');
		}).on('affixed.bs.affix', function(){
			console.log('affixed.bs.affix');
		}).on('affix-bottom.bs.affix', function(){
			console.log('affix-bottom.bs.affix');
		}).on('affixed-bottom.bs.affix', function(){
			console.log('affixed-bottom.bs.affix');
		});

		$('body').scrollspy({ target: 'nav.affix-nav' })
	});
});
