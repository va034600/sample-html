import Vue from 'vue'
import Component from 'vue-class-component'
import VueRouter from 'vue-router'

import Sub1 from "./sample/Sub1";
import Sub2 from "./sample/Sub2";

Vue.use(VueRouter)

const routes = [
  { path: '/sub1', component: Sub1 },
  { path: '/sub2', component: Sub2 }
]

var router = new VueRouter({
  mode: 'history',
  routes:routes
})



@Component({
  router,
  template: `
<div>
    <h1>Hello App!</h1>
    <p>
      <router-link to="/sub1">sub1</router-link>
      <router-link to="/sub2">sub2</router-link>
    </p>
    <router-view></router-view>
  </div>
`
})
class MyComponent extends Vue {
}

const app = new MyComponent();
app.$mount('#app')
