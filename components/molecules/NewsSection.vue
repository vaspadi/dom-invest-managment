<template lang="pug">
  section.news-section.section
    .container
      NewsList(:data="news")

      .news-section__content
        .news-section__left
          h2.news-section__title.title Последние 3 новости
          p.news-section__description Больше новостей можно увидеть по ссылке справа

        .news-section__right
          NuxtLink.news-section__link.button(to="news") Посмотреть новости
</template>

<script>
import NewsList from '~/components/molecules/NewsList'

export default {
  name: 'NewsSection',

  components: {
    NewsList
  },

  data () {
    return {
      news: []
    }
  },

  async fetch () {
    this.news = await this.$content('news', { deep: true })
      .limit(3)
      .sortBy('createdAt', 'asc')
      .fetch()
  }
}
</script>

<style lang="scss">
@import "assets/scss/base/variables";

.news-section {
  background-color: $--dark-bg;
  color: #fff;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__description {
    font-size: 25px;
  }

  &__right {
    display: flex;
    justify-content: center;
    width: 30%;
  }
}
</style>
