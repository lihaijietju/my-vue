<template>
  <div class="footer">
    <span>{{footerHelloWorld}}</span>
  </div>
</template>

<script>

export default {
  data(){
    return {
      footerHelloWorld:this.$store.state.footerHelloWorld
    }
  }
}
</script>

<style scoped>
.footer {
  height: 100px;
  background: pink;
}
</style>
