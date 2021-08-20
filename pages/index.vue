<template lang="pug">
  div.index-page
    MainSlider
    PerformanceSection
    ObjectsSection
    NewsSection
    section.section
      .container
        SliderBlock(:data="videoSlider")
</template>

<script>
import MainSlider from '~/components/molecules/MainSlider.vue'
import PerformanceSection from '~/components/molecules/PerformanceSection'
import NewsSection from '~/components/molecules/NewsSection.vue'
import ObjectsSection from '~/components/molecules/ObjectsSection'
import SliderBlock from '~/components/molecules/SliderBlock'
import { videoSlider } from '~/content/data'

export default {
  name: 'IndexPage',

  components: {
    MainSlider,
    PerformanceSection,
    NewsSection,
    ObjectsSection,
    SliderBlock
  },

  data () {
    return {
      videoSlider
    }
  }
}
</script>

<style lang="scss">
.index-page {
  padding-bottom: 100vh;
}
</style>
