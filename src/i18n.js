import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

import localeEn from '@/locale/en.json'
import localeRu from '@/locale/ru.json'

const i18n = new VueI18n ({
  locale:'ru',
  callbacklocale:'en',
  messages: {
    en: localeEn,
    ru: localeRu
  }
})

export default i18n