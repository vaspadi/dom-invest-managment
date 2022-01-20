<template lang="pug">
  div.news-page
    section.section
      .container.news-page__content
        CardList(:data="news")
        button.button(v-if="showButton" @click="showMoreNews") Больше новостей
</template>

<script>
import CardList from '~/components/molecules/CardList'
import { news } from '~/content/meta'

export default {
  name: 'NewsPage',

  meta: {
    bannerTitle: 'Новости'
  },

  components: {
    CardList
  },

  data () {
    return {
      showButton: true,
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

  head () {
    return {
      title: news.title,
      meta: [
        { hid: 'description', name: 'description', content: news.description }
      ]
    }
  },

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
