var require = {
	shim : {
		'jquery' : {
			exports : ['$']
		},
		'underscore' : {
			exports : '_'
		},
		'backbone' : {
			deps : ['underscore', 'jquery'],
			exports : 'Backbone'
		}
	},
	paths : {
		'jquery' : '../../lib/js/jquery/jquery',
		'underscore' : '../../lib/js/underscore/underscore',
		'backbone' : '../../lib/js/backbone/backbone',
		'text' : '../../lib/js/require_text/text',
		'i18n' : '../../lib/js/require_i18n/i18n'
	},
	urlArgs : 'bust=' + (new Date()).getTime()
};
