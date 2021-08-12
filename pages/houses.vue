<template lang="pug">
  div.houses-page houses
</template>

<script>
import { headTitles } from '~/content/data'

export default {
  name: 'HousesPage',

  data () {
    return {
      headTitles
    }
  },

  head: () => ({
    title: headTitles.houses
  })
}
</script>
