<template lang="pug">
  div.apartments-page
</template>

<script>
import { headTitles } from '~/content/data'

export default {
  name: 'ApartmentsPage',

  meta: {
    bannerTitle: 'Чистый воздух и тишина'
  },

  data () {
    return {
      headTitles
    }
  },

  head: () => ({
    title: headTitles.apartments
  })
}
</script>
