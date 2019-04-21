import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuetify from 'vuetify';
import { sync } from 'vuex-router-sync';
import 'vuetify/dist/vuetify.min.css';
import store from './store/store';

Vue.use(Vuetify);
sync(store, router);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
