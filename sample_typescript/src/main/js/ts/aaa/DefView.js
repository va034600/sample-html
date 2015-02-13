/// <reference path="../../../lib/tsd/tsd.d.ts" />
/// <amd-dependency path="hbs!../../../html/aaa/def" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
define(["require", "exports", 'backbone', "hbs!../../../html/aaa/def"], function (require, exports, Backbone) {
    var hbs = require('hbs!../../../html/aaa/def');
    var DefView = (function (_super) {
        __extends(DefView, _super);
        function DefView(options) {
            _super.call(this, options);
            this.template = _.template(hbs());
            this.render();
        }
        DefView.prototype.render = function () {
            $(this.el).html(this.template({}));
            return this;
        };
        return DefView;
    })(Backbone.View);
    exports.DefView = DefView;
});
//# sourceMappingURL=DefView.js.map