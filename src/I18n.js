import Vue from "vue";
import VueI18n from "vue-i18n";

import loc_pt from "./locale/pt";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "pt",
  messages: {
    pt: loc_pt,
  },
});

export default i18n;
