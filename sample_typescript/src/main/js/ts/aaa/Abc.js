/// <reference path="../../../lib/tsd/tsd.d.ts" />
/// <amd-dependency path="hbs!../../../html/aaa/abc" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'backbone', "hbs!../../../html/aaa/abc"], function (require, exports, Backbone) {
    var hbs = require('hbs!../../../html/aaa/abc');
    var UserListView = (function (_super) {
        __extends(UserListView, _super);
        function UserListView(options) {
            _super.call(this, options);
            alert(hbs());
        }
        return UserListView;
    })(Backbone.View);
    exports.UserListView = UserListView;
});
//# sourceMappingURL=Abc.js.map