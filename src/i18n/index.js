import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import ElementLocale from 'element-ui/lib/locale'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import cmsEnLocale from './lang/en'
import cmsZhLocale from './lang/zh_CN'
import operateCN from './lang/operate/zh_CN'
import operateEN from './lang/operate/en'
import configCN from './lang/config/zh_CN'
import configEN from './lang/config/en'
import contentCN from './lang/content/zh_CN'
import contentEN from './lang/content/en'
import channelCN from './lang/channel/zh_CN'
import channelEN from './lang/channel/en'
import dataCN from './lang/data/zh_CN'
import dataEN from './lang/data/en'
import pageCN from './lang/page/zh_CN'
import pageEN from './lang/page/en'
Vue.use(VueI18n);
const messages = {
    en: {
        ...cmsEnLocale,
        ...enLocale,
        ...operateEN,
        ...configEN,
        ...contentEN,
        ...channelEN,
        ...dataEN,
        ...pageEN,
    },
    zh: {
        ...cmsZhLocale,
        ...zhLocale,
        ...operateCN,
        ...configCN,
        ...contentCN,
        ...channelCN,
        ...dataCN,
        ...pageCN,
    }
}
// Create VueI18n instance with options
let localLanguage = localStorage.getItem('localLanguage');
const i18n = new VueI18n({
    locale: localLanguage ? localLanguage : 'zh', // set locale
    messages, // set locale messages
})
// ElementLocale.i18n((key, value) => i18n.t(key, value));
export default i18n;