/// <reference path="./index.d.ts"/>
import Vue from 'vue'

import Component from 'vue-class-component'
import HtmlTemplate from '../vhtml/main.vhtml'
import {SampleComponent} from "./component/SampleComponent";

import store from './store/MainStore';

@HtmlTemplate
@Component({
    store,
    components:{
        "sample":SampleComponent
    }
})
class MyComponent extends Vue {
    message: string = 'Hello Vue.js typescript2!!!'
    clickByAlertButton() {
        alert("test");
    }
}

async function start() {
    const app = new MyComponent()
    app.$mount('#app')
}

start()
