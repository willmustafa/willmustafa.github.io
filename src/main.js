import Vue from "vue";
import i18n from "./I18n";

import App from "./App.vue";
import router from "./router";

import "./assets/styles/main.css";
import "./assets/styles/grid.css";

new Vue({
  i18n,
  router,
  render: (h) => h(App),
}).$mount("#app");
