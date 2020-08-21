import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import 'normalize.css'
import './style/style.css'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.mixin({
  methods: {
    addNoteInput() {
      if(!this.noteInput.trim()) {
        return
      }
      this.arrInputs.unshift({itemTitle: this.noteInput, completed: false});
      this.noteInput = '';
    },
    clearNoteInput(index) {
      this.arrInputs.splice(index, 1);
    },
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
