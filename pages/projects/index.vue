<template lang="pug">
  div.projects-page
    Banner(title="Проекты")

    section.section
      .container.projects-page__content
        CardList(:data="projects" small)
        button.button(v-if="showButton" @click="showMoreProjects") Больше проектов
</template>

<script>
import Banner from '~/components/atoms/Banner'
import CardList from '~/components/molecules/CardList'
import { headTitles } from '~/content/data'

export default {
  name: 'ProjectsPage',

  components: {
    Banner,
    CardList
  },

  data () {
    return {
      showButton: true,
      headTitles,
      projects: []
    }
  },

  async fetch () {
    this.projects = await this.$content('news', { deep: true })
      .limit(6)
      .sortBy('createdAt', 'asc')
      .without(['body'])
      .fetch()
  },

  head: () => ({
    title: headTitles.projects
  }),

  methods: {
    async showMoreProjects () {
      this.showButton = false
      this.projects = await this.$content('news', { deep: true })
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
