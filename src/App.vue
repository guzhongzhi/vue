<template>
  <div id="app">
    <common_header></common_header>
    <div>
      <router-view/>
    </div>
    <common_footer></common_footer>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

