<template lang="html">
    <kl-page>
        <kl-header></kl-header>
        <kl-content></kl-content>
        <kl-footer></kl-footer> 
    </kl-page>
</template>

<script>
import klPage from '../pages/klPage.vue'
import klHeader from '../components/klHeader.vue'
import klContent from '../components/klContent.vue'
import klFooter from '../components/klFooter.vue'
export default {
  data () {
    return {
      img: 1
    }
  },
  computed: {
    
  },
  methods: {},
  components: {
    klFooter,
    klContent,
    klPage,
    klHeader
  }
}
</script>

<style scoped>

</style>
