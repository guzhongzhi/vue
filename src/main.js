// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'

Vue.prototype.utils = {

}
var tools = {

}
tools.showLoadingMasker = function () {

}
tools.hideLoadingMasker = function () {

}
tools.responseHandler = function (response, callbacker) {
  // Vue.utils.hideLoadingMasker()
  callbacker(response)
}
Vue.use(tools)

$.extend(Vue.prototype.utils, {
  getJSON: function (url, data, callbacker) {
    tools.showLoadingMasker()
    $.getJSON(url, data, tools.responseHandler)
  },
  postJSON: function (url, data, callbacker) {
    tools.showLoadingMasker()
    $.postJSON(url, data, tools.responseHandler)
  }
})
console.log(Vue.utils)
$('body')

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
