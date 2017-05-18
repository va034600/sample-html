import * as Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  template: `
          <div>
            <p><input v-model="message"></p>
            <p>{{message}}</p>
          </div>
        `
})
class MyComponent extends Vue {
  message: string = 'Hello Vue.js typescript!!!'
}

new Vue({
  el: '#app',
  render: h => h(MyComponent)
})
