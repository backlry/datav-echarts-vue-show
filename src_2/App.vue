<template>
  <div id="app">
    <index />
  </div>
</template>

<script>
import index from './components/datav/index.vue'

export default {
  name: 'app',
  components: {
    index
  },
  data () {
    return {}
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
