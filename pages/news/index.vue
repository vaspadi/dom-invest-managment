<template lang="pug">
  div.news-page
    Banner(title="Новости")

    section.section
      .container.news-page__content
        CardList(:data="news")
        button.button(v-if="showButton" @click="showMoreNews") Больше новостей
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
      showButton: true,
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
  }),

  methods: {
    async showMoreNews () {
      this.showButton = false
      this.news = await this.$content('news', { deep: true })
        .sortBy('createdAt', 'asc')
        .without(['body'])
        .fetch()
    }
  }
}
</script>

<style lang="scss">
.news-page {
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
