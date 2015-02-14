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
		"handlebars": '../../../lib/bower/js/handlebars/handlebars',
		"hbs": '../../../lib/manual/js/require-handlebars-plugin/hbs',

		//local
		"main": "main"
	},
	urlArgs: 'bust=' + (new Date()).getTime()
};
