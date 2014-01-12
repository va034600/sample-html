define([
	"jquery",
	"underscore",
	"backbone",
	"models/BaseModel"
],function(
	$,
	_,
	Backbone,
	BaseModel
){
	var Result = BaseModel.extend({
		urlRoot: "/user"
	});

	return Result;
});