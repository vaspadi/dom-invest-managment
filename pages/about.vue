<template lang="pug">
  div.about-page
    section.section.section_dark
      .container
        ArticleSection(:data="aboutCompany.chooseUs")
        ArticleSection.about-page__section_margin(:data="aboutCompany.history")
    section.section.container
      ArticleSection(:data="aboutCompany.confidence")
      PartnersSection.about-page__section_margin(:list="partners")
</template>

<script>
import ArticleSection from '~/components/atoms/ArticleSection'
import PartnersSection from '~/components/atoms/PartnersSection'
import { aboutCompany, partners } from '~/content/data'
import { about } from '~/content/meta'

export default {
  name: 'AboutPage',

  meta: {
    bannerTitle: 'Строим для комфортной жизни',
    bannerBg: 'about-company-bg.jpg'
  },

  components: {
    ArticleSection,
    PartnersSection
  },

  data () {
    return {
      aboutCompany,
      partners
    }
  },

  head () {
    return {
      title: about.title,
      meta: [
        { hid: 'description', name: 'description', content: about.description }
      ]
    }
  }
}
</script>

<style lang="scss">
.about-page {
  &__section {
    &_margin {
      margin-top: 80px;

      @media screen and (max-width: 720px) {
        margin-top: 50px;
      }
    }
  }
}
</style>
