import Vue from "vue";
import App from "./App.vue";
import intersect from "./directive/intersect";
import store from './store'
import router from './router.js'

import { init as themeInit } from './config/theme'

Vue.directive('intersect', intersect)

themeInit()

const app = new Vue({
  store,
  router,
  render: (h) => h(App),
});

app.$mount("#app");
