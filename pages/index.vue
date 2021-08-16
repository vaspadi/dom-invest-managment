<template lang="pug">
  div.index-page
    MainSlider
    NewsSection
</template>

<script>
import MainSlider from '~/components/molecules/MainSlider.vue'
import NewsSection from '~/components/molecules/NewsSection.vue'

export default {
  name: 'IndexPage',

  components: {
    MainSlider,
    NewsSection
  }
}
</script>

<style lang="scss">
.index-page {
  padding-bottom: 100vh;
}
</style>
