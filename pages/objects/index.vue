<template lang="pug">
  div.objects-page
    Banner(title="Наши объекты")

    section.section
      .container.objects-page__content
        CardList(:data="objects" small)
        button.button(v-if="showButton" @click="showMoreObjects") Больше объектов
</template>

<script>
import Banner from '~/components/atoms/Banner'
import CardList from '~/components/molecules/CardList'
import { headTitles } from '~/content/data'

export default {
  name: 'ObjectsPage',

  components: {
    Banner,
    CardList
  },

  data () {
    return {
      showButton: true,
      headTitles,
      objects: []
    }
  },

  async fetch () {
    this.objects = await this.$content('news', { deep: true })
      .limit(6)
      .sortBy('createdAt', 'asc')
      .without(['body'])
      .fetch()
  },

  head: () => ({
    title: headTitles.objects
  }),

  methods: {
    async showMoreObjects () {
      this.showButton = false
      this.objects = await this.$content('news', { deep: true })
        .sortBy('createdAt', 'asc')
        .without(['body'])
        .fetch()
    }
  }
}
</script>

<style lang="scss">
.objects-page {
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
