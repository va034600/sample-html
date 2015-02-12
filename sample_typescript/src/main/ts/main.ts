/// <reference path="../../lib/tsd/tsd.d.ts" />

require([
    'jquery',
    'backbone'
], ($, Backbone) => {
    Backbone.history.start();
    alert("a");
});
