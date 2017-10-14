// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import CommonFooter from './components/CommonFooter'
import CommonHead from './components/CommonHead'
import router from './router'
import $ from 'jquery'
import vSelect from 'vue-select'
import Element from 'element-ui'

Vue.component('common_header', {
  template: '<CommonHead/>',
  components: { CommonHead }
})
Vue.component('common_footer', {
  template: '<CommonFooter/>',
  components: { CommonFooter }
})

Vue.use(Element)
Vue.component('v-select', vSelect)

Vue.prototype.utils = {

}
var tools = {

}
tools.showLoadingMasker = function () {

}
tools.hideLoadingMasker = function () {

}
Vue.use(tools)

$.extend(Vue.prototype.utils, {
  getJSON: function (url, data, callbacker) {
    tools.showLoadingMasker()
    $.getJSON(url, data, function (response) {
      // Vue.utils.hideLoadingMasker()
      console.log(callbacker)
      callbacker(response)
    })
  },
  postJSON: function (url, data, callbacker) {
    tools.showLoadingMasker()
    $.postJSON(url, data, function (response) {
      // Vue.utils.hideLoadingMasker()
      console.log(callbacker)
      callbacker(response)
    })
  }
})

Vue.config.productionTip = false

Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})

/* eslint-disable no-new */
window.v = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
