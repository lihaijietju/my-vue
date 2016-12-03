<template lang="html">
  <div>
    <router-link to="/">去test</router-link>
    <router-link to="/test2">去test2</router-link>
    <slot></slot>
  </div>
</template>

<script>

export default {
  
}

</script>

<style lang="css">
html, body {
  position: relative;
  height: 100%;
  width: 100%;
  width: 100vw;
  height: 100vh;
  max-height: 100%;
  overflow: hidden;
  background: #efefef;
}

#kl-app-container {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
