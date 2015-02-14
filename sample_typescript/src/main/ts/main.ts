/// <reference path="../../lib/tsd/tsd.d.ts" />

require([
    'jquery',
    'backbone',
    'aaa/AbcView'
], (
    $,
    Backbone,
    AbcView
) => {
    Backbone.history.start();

    $("#container-wrap-box").append(new AbcView.AbcView().el);
});
