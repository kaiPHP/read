import Vue from 'vue'
import router from './router/'
import App from './App.vue'
import {axiosPost, axiosGet} from './assets/js/'
import loading from './plugins/loading/'
import toast from './plugins/toast/'
 
Vue.prototype.axiosPost = axiosPost
Vue.prototype.axiosGet = axiosGet

import '@/assets/style/reset.styl'
Vue.use(loading)
Vue.use(toast)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
