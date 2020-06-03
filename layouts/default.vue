<template>
  <div>
    <Header/>
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
export default {
  components:{
    Header
  }
}
</script>

<style>
body {
  background-color: #d6ffb7;
  margin: 0;
  padding: 0;
  height: 1500px;
}
</style>
