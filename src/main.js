import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import * as VueGoogleMaps from 'vue2-google-maps'

console.clear()

Axios.defaults.baseURL = "http://localhost:3000/api/"

// gooogle mapを使う設定
Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_GOOGLE_API_KEY,
    libraries: 'places',
    region: 'JP',
    language: 'ja'
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  // axios,
  render: h => h(App)
}).$mount('#app')

