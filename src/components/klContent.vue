<template>
  <div class="content">
    <span>{{contentHelloWorld}}</span>
  </div>
</template>

<script>
export default {
  data(){
    return {
      contentHelloWorld:this.$store.state.contentHelloWorld
    }
  }
}
</script>

<style scoped>
.content {
  height: 100px;
  background: red;
}
</style>
