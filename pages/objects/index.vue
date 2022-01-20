<template lang="pug">
  div.objects-page
    section.section
      .container.objects-page__content
        CardList(:data="objects" small)
        button.button(v-if="showButton" @click="showMoreObjects") Больше объектов
</template>

<script>
import CardList from '~/components/molecules/CardList'
import { objects } from '~/content/meta'

export default {
  name: 'ObjectsPage',

  meta: {
    bannerTitle: 'Готовые проекты'
  },

  components: {
    CardList
  },

  data () {
    return {
      showButton: true,
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

  head () {
    return {
      title: objects.title,
      meta: [
        { hid: 'description', name: 'description', content: objects.description }
      ]
    }
  },

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
