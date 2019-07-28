import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

window.liff.getProfile = () =>
  new Promise((resolve, reject) => {
    resolve({ userId: 'Mock line userId', displayName: 'Mock display name' })
  })
window.liff.init = data => data({ context: { userId: 'line uid' } })

Vue.prototype.$liff = window.liff
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
