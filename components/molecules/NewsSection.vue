<template lang="pug">
  section.news-section.section
    .container
      CardList(:data="news")

      //.news-section__content
      //  .news-section__left
      //    h2.news-section__title.title Последние 3 новости
      //    p.news-section__description Больше новостей можно увидеть по ссылке справа
      //
      //  .news-section__right
      //    NuxtLink.news-section__link.button(to="news") Посмотреть новости
      SectionHeader(:data="newsSection" light)
</template>

<script>
import CardList from '~/components/molecules/CardList'
import SectionHeader from '~/components/atoms/SectionHeader'
import { newsSection } from '~/content/data'

export default {
  name: 'NewsSection',

  components: {
    CardList,
    SectionHeader
  },

  props: {
    indexPage: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      newsSection,
      news: []
    }
  },

  async fetch () {
    // indexPage влияет на отображение объектов на главной странице
    this.news = await this.$content('news', { deep: true })
      .where(this.indexPage ? { indexPage: true } : null)
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
