/// <reference path="../../../lib/tsd/tsd.d.ts" />
/// <amd-dependency path="hbs!../../../html/aaa/abc" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'backbone', 'aaa/DefView', "hbs!../../../html/aaa/abc"], function (require, exports, Backbone, DefView) {
    var hbs = require('hbs!../../../html/aaa/abc');
    var AbcView = (function (_super) {
        __extends(AbcView, _super);
        function AbcView(options) {
            _super.call(this, options);
            //noinspection JSValidateTypes
            this.template = _.template(hbs());
            this.render();
        }
        AbcView.prototype.render = function () {
            $(this.el).html(this.template({}));
            var defView = new DefView.DefView();
            this.$("#def-box").append(defView.el);
            return this;
        };
        return AbcView;
    })(Backbone.View);
    exports.AbcView = AbcView;
});
//# sourceMappingURL=AbcView.js.map