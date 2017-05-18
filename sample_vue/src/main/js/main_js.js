import Vue from 'vue'

new Vue({
        el: '#app',
        template: `
          <div>
            <p><input v-model="message"></p>
            <p>{{message}}</p>
          </div>
        `,
        data: {
          message: 'Hello Vue.js!!'
        }
      });