<template>
  <div id="login">
    <form class="form-inline">
      <div class="form-group">
        <label for="exampleInputName2">Name</label>
        <input type="text" class="form-control" id="exampleInputName2" placeholder="Jane Doe">
      </div>
      <div class="form-group">
        <label for="exampleInputEmail2">Email</label>
        <input type="email" class="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com">
      </div>
      <button type="submit" class="btn btn-default">Send invitation</button>
    </form>

    <form class="">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="form-group">
        <label for="exampleInputFile">File input</label>
        <input type="file" id="exampleInputFile">
        <p class="help-block">Example block-level help text here.</p>
      </div>
      <div class="form-group">
      <div class="checkbox">
        <label>
          <input type="checkbox"> Check me out
        </label>
      </div>
      </div>
      <div class="form-group">


      <button type="submit" class="btn btn-default"  v-bind:disabled="isButtonDisabled"  v-on:click="doLogin()">Submit</button>
      </div>
    </form>
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
        result: 'try to login',
        isButtonDisabled: false
      }
    },
    methods: {
      doSomeThing: function () {
        alert('F')
      },
      doLogin: function () {
        var _self = this
        _self.isButtonDisabled = true
        _self.utils.getJSON('/api/member/doLogin', function (response) {
          console.log(response)
          _self.result = response.username
        })
      }
    }
  }
</script>

