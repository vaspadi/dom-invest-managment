<template lang="pug">
  div.objects-page objects
</template>

<script>
import { headTitles } from '~/content/data'

export default {
  name: 'ObjectsPage',

  data () {
    return {
      headTitles
    }
  },

  head: () => ({
    title: headTitles.objects
  })
}
</script>
