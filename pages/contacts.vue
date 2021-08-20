<template lang="pug">
  div.contacts-page
    Banner(title="Контакты")
</template>

<script>
import Banner from '~/components/atoms/Banner'
import { headTitles } from '~/content/data'

export default {
  name: 'ContactsPage',

  components: {
    Banner
  },

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
