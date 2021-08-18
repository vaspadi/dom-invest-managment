<template lang="pug">
  div.houses-page
    Banner(title="Индивидуальные жилые дома")
    section.section
      .container
        SliderBlock(:data="items" cards)
</template>

<script>
import Banner from '~/components/atoms/Banner'

import SliderBlock from '~/components/molecules/SliderBlock'

import { headTitles } from '~/content/data'

export default {
  name: 'HousesPage',

  components: {
    Banner,
    SliderBlock
  },

  data () {
    return {
      items: [],
      headTitles
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
