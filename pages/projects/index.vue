<template lang="pug">
  div.projects-page
    section.section
      .container.projects-page__content
        CardList(:data="projects" small)
        button.button(v-if="showButton && projects.length >= limit" @click="showMoreProjects") Больше проектов
</template>

<script>
import CardList from '~/components/molecules/CardList'
import { projects } from '~/content/meta'

export default {
  name: 'ProjectsPage',

  meta: {
    bannerTitle: 'Новостройки'
  },

  components: {
    CardList
  },

  data () {
    return {
      showButton: true,
      limit: 6,
      projects: []
    }
  },

  async fetch () {
    this.projects = await this.$content('objects', { deep: true })
      .where({ project: true })
      .limit(this.limit)
      .sortBy('createdAt', 'asc')
      .without(['body'])
      .fetch()
  },

  head () {
    return {
      title: projects.title,
      meta: [
        { hid: 'description', name: 'description', content: projects.description }
      ]
    }
  },

  methods: {
    async showMoreProjects () {
      this.showButton = false
      this.projects = await this.$content('objects', { deep: true })
        .where({ project: true })
        .sortBy('createdAt', 'asc')
        .without(['body'])
        .fetch()
    }
  }
}
</script>

<style lang="scss">
.projects-page {
  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
