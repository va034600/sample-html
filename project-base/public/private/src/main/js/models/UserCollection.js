define([
	"jquery",
	"underscore",
	"backbone",
	"models/BaseCollection",
	"models/UserModel"
],function(
	$,
	_,
	Backbone,
	BaseCollection,
	UserModel
){
	var Result = BaseCollection.extend({
		model: UserModel,
		urlRoot : '/users',
		parse: function (response) {
			return response.users;
		}
	});

	return Result;
});