var require = {
	shim : {
		'jquery' : {
			exports : [ '$' ]
		},
		'underscore' : {
			exports : '_'
		},
		'backbone' : {
			deps : [ 'underscore', 'jquery' ],
			exports : 'Backbone'
		},
		'foundation' : {
			deps : [ 'jquery', 'jquery_cookie', 'fastclick',
					'jquery_placeholder', 'lodash' ]
		},
		'jquery_cookie' : {
			deps : [ 'jquery' ]
		},
		'jquery_placeholder' : {
			deps : [ 'jquery' ]
		}
	},
	paths : {
		'jquery' : '../../lib/bower/js/jquery/jquery',
		'underscore' : '../../lib/bower/js/underscore/underscore',
		'backbone' : '../../lib/bower/js/backbone/backbone',
		'text' : '../../lib/manual/js/require_text/text',
		'i18n' : '../../lib/manual/js/require_i18n/i18n',
		'foundation' : '../../lib/bower/js/foundation/foundation',
		'fastclick' : '../../lib/bower/js/fastclick/fastclick',
		'jquery_cookie' : '../../lib/bower/js/jquery.cookie/jquery.cookie',
		'jquery_placeholder' : '../../lib/bower/js/jquery-placeholder/jquery.placeholder',
		'lodash' : '../../lib/bower/js/lodash/lodash.compat'
	},
	urlArgs : 'bust=' + (new Date()).getTime()
};
