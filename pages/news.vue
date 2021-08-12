<template lang="pug">
  div.news-page news
</template>

<script>
import { headTitles } from '~/content/data'

export default {
  name: 'NewsPage',

  data () {
    return {
      headTitles
    }
  },

  head: () => ({
    title: headTitles.news
  })
}
</script>
