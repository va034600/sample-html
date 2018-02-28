/// <reference path="../index.d.ts"/>
import Vue from 'vue'
import Component from 'vue-class-component'
import HtmlTemplate from '../../vhtml/main.vhtml'

import store from '../store/MainStore';
import router from '../router/mainRouter'

@HtmlTemplate
@Component({
  router,
  store,
})
export class MainComponent extends Vue {
  message: string = 'Hello Vue.js typescript2!!!'
}
