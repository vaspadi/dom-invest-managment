<template lang="pug">
  div.index-page
    MainSlider
    InformationSection(:data="performanceSection")
    ObjectsSection
    NewsSection
    section.section
      .container
        SliderBlock(:data="videoSlider")
    InformationSection(:data="mortgageSection" reverse)
</template>

<script>
import MainSlider from '~/components/molecules/MainSlider.vue'
import InformationSection from '~/components/molecules/InformationSection'
import NewsSection from '~/components/molecules/NewsSection.vue'
import ObjectsSection from '~/components/molecules/ObjectsSection'
import SliderBlock from '~/components/molecules/SliderBlock'
import { videoSlider, performanceSection, mortgageSection } from '~/content/data'

export default {
  name: 'IndexPage',

  components: {
    MainSlider,
    InformationSection,
    NewsSection,
    ObjectsSection,
    SliderBlock
  },

  data () {
    return {
      videoSlider,
      performanceSection,
      mortgageSection
    }
  }
}
</script>

<style lang="scss">
.index-page {
  padding-bottom: 100vh;
}
</style>
