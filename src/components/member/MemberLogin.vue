<template>
  <div id="login">
    userNamev : <input/><br/>
    <button v-on:click="doLogin()">登陆</button>
    <span>{{result}}</span>
  </div>
</template>
<script>
  export default {
    name: 'MemberLogin',
    _self: this,
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        result: 'try to login'
      }
    },
    methods: {
      doSomeThing: function () {
        alert('F')
      },
      doLogin: function () {
        var _self = this
        _self.utils.getJSON('/api/member/doLogin', function (response) {
          console.log(response)
          _self.result = response.username
        })
      }
    }
  }
</script>

