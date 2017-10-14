<template>
  <div id="login">
    <form class="form-inline">
      <div class="form-group">
        <label for="email">Email: </label>
        <input class="form-control" v-validate v-model="loginForm.username" data-vv-rules="required|email" :class="{'input': true, 'is-danger': errors.has('email') }" name="email" id="email" type="text" placeholder="Email">
        <span fv-shfow="errors.has('email')" style="display: none" class="help is-danger">{{ errors.first('email') }}</span>
      </div>

      <div class="form-group">
        <label for="password">Password: </label>
        <input type="password" class="form-control" v-model="loginForm.password" v-validate data-vv-rules="required|min:6" id="password" name="password">
      </div>
      <button type="button"  :disabled="errors.any()" class="btn btn-default"  v-on:click="doLogin()">Send invitation</button>
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
        <label for="exampleInputPassword1">Password</label>
        <select class="form-control select2">
        <option>test1</option>
        <option>test2</option>
        </select>
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
        <v-select multiple v-model="selected" :options="[{'label':'bbb','value':'1'}]"></v-select>

        <v-select
          :debounce="250"
          :on-search="getOptions"
          :options="options"
          placeholder="Search GitHub Repositories..."
          label="label"
        >
        </v-select>

        <el-time-select
          v-model="value1"
          :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
          placeholder="Select time">
        </el-time-select>

        <button type="button" class="btn btn-default"  v-bind:disabled="isButtonDisabled"  v-on:click="doLogin()">Submit</button>
      </div>
    </form>

    <span>{{result}}</span>
  </div>
</template>
<script>
  import swal from 'sweetalert'

  export default {
    mounted () {
    },
    name: 'MemberLogin',
    _self: this,
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        result: 'try to login',
        isButtonDisabled: false,
        selected: ['1'],
        options: [],
        value1: '',
        loginForm: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      doSomeThing: function () {
        alert('F')
      },
      getOptions (search, loading) {
        // loading(true)
        let _self = this
        this.utils.getJSON('/api/member/types', {
          q: search
        }, function (response) {
          console.log(response)
          // loading(false)
          _self.options = response
        })
      },
      doLogin: function () {
        var _self = this
        if (this.loginForm.username === '' || this.loginForm.password.length < 6) {
          swal('请输入用户名和密码!')
          return false
        }
        _self.isButtonDisabled = true
        _self.utils.postJSON('/api/member/doLogin', this.loginForm, function (response) {
          if (response.code !== 200) {
            swal('提示', response.message, 'error')
          } else {
            swal(response.data.username + '登陆成功')
          }
        })
      }
    }
  }
</script>

