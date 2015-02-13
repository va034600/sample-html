/// <reference path="../../../lib/tsd/tsd.d.ts" />
/// <amd-dependency path="hbs!../../../html/aaa/def" />

import Backbone = require('backbone');

var hbs = require('hbs!../../../html/aaa/def');

export class DefView extends Backbone.View<Backbone.Model> {
    template: (data: any) => string;

    constructor(options?) {
        super(options);
        this.template = _.template(hbs());
        this.render();
    }

    render(){
        $(this.el).html(this.template({}));
        return this;
    }
}

