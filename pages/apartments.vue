<template lang="pug">
  div.apartments-page apartments
</template>

<script>
import { headTitles } from '~/content/data'

export default {
  name: 'ApartmentsPage',

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
