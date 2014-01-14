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
		},
		'foundation' : {
			deps : ['modernizr', 'jquery']
		}
	},
	paths : {
		'jquery' : '../../lib/bower/js/jquery/jquery',
		'underscore' : '../../lib/bower/js/underscore/underscore',
		'backbone' : '../../lib/bower/js/backbone/backbone',
		'text' : '../../lib/manual/js/require_text/text',
		'i18n' : '../../lib/manual/js/require_i18n/i18n',
		'foundation' : '../../lib/bower/js/foundation/foundation',
		'modernizr' : '../../lib/bower/js/modernizr/modernizr'
	},
	urlArgs : 'bust=' + (new Date()).getTime()
};
