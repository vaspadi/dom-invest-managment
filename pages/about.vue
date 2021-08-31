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
import { headTitles, aboutCompany, partners } from '~/content/data'

export default {
  name: 'AboutPage',

  meta: {
    bannerTitle: 'история компании «Дом Инвест»'
  },

  components: {
    ArticleSection,
    PartnersSection
  },

  data () {
    return {
      headTitles,
      aboutCompany,
      partners
    }
  },

  head: () => ({
    title: headTitles.about
  })
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
