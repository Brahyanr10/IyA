import Vue from 'vue'
import { Dropdown, DropdownMenu, DropdownItem } from 'element-ui'
import lang from 'element-ui/lib/locale/lang/es'
import locale from 'element-ui/lib/locale'

Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)

locale.use(lang)
