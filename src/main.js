// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

//vuex
import store from "./store"

import routes from './routes'

import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles  引用在线版本时注释
// import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'
// import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'

//引用在线版本时注释
//import FontAwesome from '@/assets/css/font-awesome.min.css'

// Import App Custom Styles
import AppStyles from '@/assets/css/app.css'

import App from './App'

Vue.config.productionTip = false
// Init F7 Vue Plugin
Vue.use(Framework7Vue)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  framework7: {
    root: '#app',
    routes,
    modalTitle: "Framework7",
    modalButtonOk: "确认",
    modalButtonCancel: "取消",
    animatePages:true,
    onPageBack: (app, page) => {

    }
  },
  components: { App },
  template: '<App/>'
})
