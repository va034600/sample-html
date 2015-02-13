/// <reference path="../../lib/tsd/tsd.d.ts" />

require([
    'jquery',
    'backbone',
    'aaa/Abc'
], (
    $,
    Backbone,
    Abc
) => {
    Backbone.history.start();
});
