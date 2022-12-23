import Vue from "vue";
import VueI18n from "vue-i18n";

import loc_pt from "./locale/pt";
import loc_en from "./locale/en";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale:
    navigator.language.split("-")[0] || navigator.userLanguage.split("-")[0],
  messages: {
    pt: loc_pt,
    en: loc_en,
  },
});

export default i18n;
