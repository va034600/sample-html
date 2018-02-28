/// <reference path="./index.d.ts"/>
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'

import {MainComponent} from "./component/MainComponent";
import {FooterComponent} from "./component/FooterComponent";
import {NavigationComponent} from "./component/NavigationComponent";

Vue.use(Vuex)
Vue.use(VueRouter)

function start() {
    const navigation = new NavigationComponent()
    navigation.$mount('#navigation')

    const footer = new FooterComponent()
    footer.$mount('#footer')

    const app = new MainComponent()
    app.$mount('#app')
}

start()
