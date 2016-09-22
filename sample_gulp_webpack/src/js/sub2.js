define([
	"jquery",
	"underscore2"
], function ($, _) {
	'use strict';

	var no = _.last([5, 4, 3, 2, 1112]); 

	return $("#test-box").html() + ":aaaa-" + no;
});