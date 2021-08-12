<template lang="pug">
  div.projects-page projects
</template>

<script>
import { headTitles } from '~/content/data'

export default {
  name: 'ProjectsPage',

  data () {
    return {
      headTitles
    }
  },

  head: () => ({
    title: headTitles.projects
  })
}
</script>
