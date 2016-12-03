<template>
  <div class="header">
    <span>{{headerHelloWorld}}</span>

  </div>
</template>
<script>
export default {
  data(){
    return {
      headerHelloWorld:this.$store.state.headerHelloWorld
    }
  }
}
</script>

<style scoped>
.header{
  height: 100px;
  background: gray;
}
</style>
