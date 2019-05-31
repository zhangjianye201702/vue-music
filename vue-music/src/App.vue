<template>
  <div id="app">
    <my-header></my-header>
    <tab></tab>
    <router-view/>
  </div>
</template>

<script>
import MyHeader from '@/components/m-header/m-header'
import Tab from '@/components/tab/tab'
export default {
  name: 'App',
  components: {
    MyHeader, Tab
  }
}
</script>

<style scoped lang="stylus">
</style>
