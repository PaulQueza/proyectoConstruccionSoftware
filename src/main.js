import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
<<<<<<< HEAD

=======
import axios from 'axios'
import VueAxios from 'vue-axios'
>>>>>>> PaulQuezada
Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
<<<<<<< HEAD
=======
Vue.use(VueAxios, axios)

// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'http://localhost:3000/api';
>>>>>>> PaulQuezada
