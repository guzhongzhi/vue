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
/*
  not working for Vue2.2 later
  import Validator from 'vue-validator'
  Vue.use(Validator)
 */
import VeeValidate from 'vee-validate'

const config = {
  errorBagName: 'errors', // change if property conflicts.
  fieldsBagName: 'fields',
  delay: 100,
  locale: 'zh_CN',
  dictionary: null,
  strict: true,
  classes: false,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  },
  events: 'input|blur',
  inject: true,
  validity: false,
  aria: true
}

Vue.use(VeeValidate, config)

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
    $.ajax({
      type: 'POST',
      url: url,
      data: data,
      success: function (response) {
        // Vue.utils.hideLoadingMasker()
        console.log(callbacker)
        callbacker(response)
      },
      dataType: 'json'
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
