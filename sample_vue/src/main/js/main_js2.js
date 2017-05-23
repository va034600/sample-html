var Vue = require("vue");
var vueSample = require("../vue/sample.vue");

var app = module.exports = new Vue({
    el: '#app',
    render: h => h(vueSample)
});
