<template lang="pug">
  section.news-section.section
    .container
      CardList(:data="news")

      SectionHeader(:data="newsSection" button-url="/news" light)
</template>

<script>
import CardList from '~/components/molecules/CardList'
import SectionHeader from '~/components/atoms/SectionHeader'
import newsSection from '~/content/index-page/newsSection'

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
