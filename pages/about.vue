<template lang="pug">
  div.about-page about
</template>

<script>
import { headTitles } from '~/content/data'

export default {
  name: 'AboutPage',

  data () {
    return {
      headTitles
    }
  },

  head: () => ({
    title: headTitles.about
  })
}
</script>
