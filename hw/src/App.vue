<template>
  <div>
    <SongShop/>
  </div>
</template>

<script>
  import SongShop from './components/SongShop.vue'

  export default {
    name: 'App',
    mounted() {
      this.$store.dispatch('getProductItems');
    },
    components: {
      SongShop
    }
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
