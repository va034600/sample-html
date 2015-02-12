var require = {
	shim : {
		"jquery" : {
			exports : [ '$' ]
		},
		"underscore": {
			exports: '_'
		},
		"backbone": {
			deps: [ 'underscore', 'jquery' ],
			exports: 'Backbone'
		},

		//local
		"main":{
			deps: [
			]
		}
	},
	paths : {
		"jquery" : "../../../lib/bower/js/jquery/jquery",
		"underscore" : '../../../lib/bower/js/underscore/underscore',
		"backbone" : '../../../lib/bower/js/backbone/backbone',
		"text": '../../../lib/bower/js/text/text',

		//local
		"main": "main"
	},
	urlArgs: 'bust=' + (new Date()).getTime()
};
