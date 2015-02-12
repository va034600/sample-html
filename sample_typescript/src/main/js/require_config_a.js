require.config({
	paths: {
		jquery: '../../lib/bower/js/jquery/jquery',
		underscore: '../../lib/bower/js/underscore/underscore',
		backbone: '../../lib/bower/js/backbone/backbone'
	},

	shim: {
		jquery: {
			exports: '$'
		},
		underscore: {
			exports: '_'
		}
	},
	urlArgs: 'bust=' + (new Date()).getTime()
});
alert("s");
