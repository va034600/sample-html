/// <reference path="../../../lib/tsd/tsd.d.ts" />
/// <amd-dependency path="hbs!../../../html/aaa/abc" />

import Backbone = require('backbone');
import DefView = require('aaa/DefView');

var hbs:Function = require('hbs!../../../html/aaa/abc');

export class AbcView extends Backbone.View<Backbone.Model> {
    template: (data: any) => string;

    constructor(options?) {
        super(options);
        this.template = _.template(hbs());
        this.render();
    }

    render(){
        $(this.el).html(this.template({}));

        var defView = new DefView.DefView();
        this.$("#def-box").append(defView.el);

        return this;
    }
}

