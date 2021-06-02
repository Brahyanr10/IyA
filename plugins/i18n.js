import Vue from "vue";
import VueI18n from "vue-i18n";

// Translators
// import discount from '../i18n/discountPromo'

Vue.use(VueI18n);

const es = [
  // discount.es,
];
const en = [
  // discount.en,
];
export default ({ app }) => {
  // Set i18n instance on app
  app.i18n = new VueI18n({
    locale: "es",
    messages: {
      es: Object.assign({}, ...es),
      en: Object.assign({}, ...en)
    }
  });
};
