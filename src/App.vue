<template>
  <div id="nav">
    <router-link to="/">Home</router-link>  |
    <router-link to="/about">About</router-link>  |
    <router-link to="/basket">Shopping bag ({{this.productsInBag.length}})</router-link>
  </div>
  <router-view/>
</template>

<script>



export default {

  created() {
    this.$store.dispatch('loadProducts');
      },
  computed: {
    productsInBag() {
  return this.$store.state.productsInBag;
}
  }
}
  
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  
}
</style>
