import Vue from 'vue'
import Cookies from 'js-cookie'
import i18n from '@/i18n/index' // Internationalization
import Element from 'element-ui'
import './styles.scss'

Vue.use(Element, {
    size: Cookies.get('size') || 'medium', // set element-ui default size
    i18n: (key, value) => i18n.t(key, value)
})