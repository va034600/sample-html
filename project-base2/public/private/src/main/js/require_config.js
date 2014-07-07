var require = {
	"shim": {
		'jquery': {
			exports: [ '$' ]
		},
		"angular": {
			"exports": "angular"
		},
		"angular_resource": {
			"deps": ["angular"]
		},
		"angular_route": {
			"deps": ["angular"]
		},
		"bootstrap":{
			deps: [ "bootstrap_affix", "bootstrap_alert" , "bootstrap_button" , "bootstrap_carousel" , "bootstrap_dropdown" , "bootstrap_tab" , "bootstrap_transition" , "bootstrap_scrollspy" , "bootstrap_modal" , "bootstrap_tooltip" , "bootstrap_popover" ]
		},
		"bootstrap_affix":{
			deps: [ "jquery" ]
		},
		"bootstrap_alert":{
			deps: [ "jquery" ]
		},
		"bootstrap_button":{
			deps: [ "jquery" ]
		},
		"bootstrap_carousel":{
			deps: [ "jquery" ]
		},
		"bootstrap_dropdown":{
			deps: [ "jquery" ]
		},
		"bootstrap_tab":{
			deps: [ "jquery" ]
		},
		"bootstrap_transition":{
			deps: [ "jquery" ]
		},
		"bootstrap_scrollspy":{
			deps: [ "jquery" ]
		},
		"bootstrap_modal":{
			deps: [ "jquery" ]
		},
		"bootstrap_tooltip":{
			deps: [ "jquery" ]
		},
		"bootstrap_popover":{
			deps: [ "jquery", "bootstrap_tooltip" ]
		}
	},
	"priority": ["angular"],
	"paths": {
		'jquery': '../../lib/bower/js/jquery/jquery',
		'domReady': '../../lib/manual/js/requirejs-domready/domReady',

		"angular": "../../lib/bower/js/angular/angular",
		"angular_resource": "../../lib/bower/js/angular-resource/angular-resource",
		"angular_route": "../../lib/bower/js/angular-route/angular-route",

		"bootstrap": "../../lib/bower/js/bootstrap-sass-official/bootstrap",
		"bootstrap_affix": "../../lib/bower/js/bootstrap-sass-official/affix",

		"bootstrap_alert" : "../../lib/bower/js/bootstrap-sass-official/alert",
		"bootstrap_button" : "../../lib/bower/js/bootstrap-sass-official/button",
		"bootstrap_carousel" : "../../lib/bower/js/bootstrap-sass-official/carousel",
		"bootstrap_dropdown" : "../../lib/bower/js/bootstrap-sass-official/dropdown",
		"bootstrap_tab" : "../../lib/bower/js/bootstrap-sass-official/tab",
		"bootstrap_transition" : "../../lib/bower/js/bootstrap-sass-official/transition",
		"bootstrap_scrollspy" : "../../lib/bower/js/bootstrap-sass-official/scrollspy",
		"bootstrap_modal" : "../../lib/bower/js/bootstrap-sass-official/modal",
		"bootstrap_tooltip" : "../../lib/bower/js/bootstrap-sass-official/tooltip",
		"bootstrap_popover" : "../../lib/bower/js/bootstrap-sass-official/popover"
	}
	//urlArgs: 'bust=' + (new Date()).getTime()
};
