<template lang="pug">
  div.houses-page
    Banner(title="Индивидуальные жилые дома")
    InformationSection(:data="housesInformation")
    section.section
      .container
        SliderBlock(:data="items" cards)
</template>

<script>
import Banner from '~/components/atoms/Banner'
import InformationSection from '~/components/molecules/InformationSection'
import SliderBlock from '~/components/molecules/SliderBlock'
import { headTitles, housesInformation } from '~/content/data'

export default {
  name: 'HousesPage',

  components: {
    Banner,
    InformationSection,
    SliderBlock
  },

  data () {
    return {
      items: [],
      headTitles,
      housesInformation
    }
  },

  async fetch () {
    this.items = await this.$content('news', { deep: true }).limit(6).fetch()
  },

  head: () => ({
    title: headTitles.houses
  })
}
</script>
