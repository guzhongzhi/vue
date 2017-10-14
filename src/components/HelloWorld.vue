<template>
  <div class="hello">
    {{msg}}
    <router-link to="/member/login">Go to Foo</router-link>

    <button v-on:click="doSomeThing()">点击</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    doSomeThing: function () {
      alert('f')
    }
  }
}
</script>

