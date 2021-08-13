<template lang="pug">
  div.apartments-page
    Banner(title="Чистый воздух и тишина")
</template>

<script>
import Banner from '~/components/atoms/Banner'
import { headTitles } from '~/content/data'

export default {
  name: 'ApartmentsPage',

  components: {
    Banner
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
