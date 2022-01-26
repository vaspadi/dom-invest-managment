<template lang="pug">
  div.index-page
    MainSlider
    //- InformationSection(:data="performanceSection")
    ObjectsSection(:limit="3")
    NewsSection.index-page__news
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
import { home } from '~/content/meta'

export default {
  name: 'IndexPage',

  components: {
    MainSlider,
    InformationSection,
    NewsSection,
    ObjectsSection,
    SliderBlock
  },

  layout: 'no-banner',

  data () {
    return {
      videoSlider,
      performanceSection,
      mortgageSection
    }
  },

  head () {
    return {
      title: home.title,
      meta: [
        { hid: 'description', name: 'description', content: home.description }
      ]
    }
  }
}
</script>

<style lang="scss">
.index-page {
  &__news {
    @media screen and (max-width: 1140px) {
      .cards-section__item {
        width: 100%;
        margin-right: 0;
        margin-left: 0;
      }
    }
  }
}
</style>
