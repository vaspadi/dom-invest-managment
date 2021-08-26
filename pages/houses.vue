<template lang="pug">
  div.houses-page
    InformationSection(:data="housesInformation")
    section.section
      .container
        SliderBlock(:data="items" cards)
</template>

<script>
import InformationSection from '~/components/molecules/InformationSection'
import SliderBlock from '~/components/molecules/SliderBlock'
import { headTitles, housesInformation } from '~/content/data'

export default {
  name: 'HousesPage',

  components: {
    InformationSection,
    SliderBlock
  },

  meta: {
    bannerTitle: 'Индивидуальные жилые дома'
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
