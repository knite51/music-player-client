import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import { sync } from "vuex-router-sync";
import "vuetify/dist/vuetify.min.css";
import store from "./store/store";
import VueYouTubeEmbed from "vue-youtube-embed";

Vue.config.productionTip = false;

Vue.use(Vuetify);

Vue.use(VueYouTubeEmbed);

sync(store, router);

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount("#app");
