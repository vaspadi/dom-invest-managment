<template lang="pug">
  div.index-page
    MainSlider
    ObjectsSection(:limit="3" index-page)
    NewsSection.index-page__news(index-page)
    section.section
      .container
        SliderBlock(:data="videoSlider")
    InformationSection(:data="mortgageSection" button-url="/mortgage" reverse)
</template>

<script>
import MainSlider from '~/components/molecules/MainSlider.vue'
import InformationSection from '~/components/molecules/InformationSection'
import NewsSection from '~/components/molecules/NewsSection.vue'
import ObjectsSection from '~/components/molecules/ObjectsSection'
import SliderBlock from '~/components/molecules/SliderBlock'
import mortgageSection from '~/content/index-page/mortgageSection'
import { videoSlider } from '~/content/data'
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
