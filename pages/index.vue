<template lang="pug">
  div.index-page
    MainSlider
    CardsSection
</template>

<script>
import MainSlider from '~/components/molecules/MainSlider.vue'
import CardsSection from '~/components/molecules/CardsSection.vue'

export default {
  name: 'IndexPage',

  components: {
    MainSlider,
    CardsSection
  }
}
</script>

<style lang="scss">
.index-page {
  padding-bottom: 100vh;
}
</style>
