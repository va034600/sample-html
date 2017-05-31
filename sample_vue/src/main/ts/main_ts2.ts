/// <reference path="./index.d.ts"/>
import * as Vue from 'vue'
import Component from 'vue-class-component'
import HtmlTemplate from '../vhtml/main2.vhtml'

@HtmlTemplate
@Component({
})
class MyComponent extends Vue {
  message: string = 'Hello Vue.js typescript2!!!'
  clickByAlertButton() {
    alert("test");
  }
}

new Vue({
  el: '#app',
  render: h => h(MyComponent)
})
