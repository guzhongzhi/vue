<template>
  <div class="test">
    {{msg}}
  <button></button>
    <div v-title data-title="test2">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Test',
    data () {
      return {
        msg: 'Test'
      }
    }
  }
</script>
