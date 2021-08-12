<template lang="pug">
  div.contacts-page contacts
</template>

<script>
import { headTitles } from '~/content/data'

export default {
  name: 'ContactsPage',

  data () {
    return {
      headTitles
    }
  },

  head: () => ({
    title: headTitles.contacts
  })
}
</script>
