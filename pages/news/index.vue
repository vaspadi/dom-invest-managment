<template lang="pug">
  div.news-page
    Banner(title="Новости")

    section.section
      .container
        CardList(:data="news")
</template>

<script>
import Banner from '~/components/atoms/Banner'
import CardList from '~/components/molecules/CardList'
import { headTitles } from '~/content/data'

export default {
  name: 'NewsPage',

  components: {
    Banner,
    CardList
  },

  data () {
    return {
      headTitles,
      news: []
    }
  },

  async fetch () {
    this.news = await this.$content('news', { deep: true })
      .limit(6)
      .sortBy('createdAt', 'asc')
      .without(['body'])
      .fetch()
  },

  head: () => ({
    title: headTitles.news
  })
}
</script>
