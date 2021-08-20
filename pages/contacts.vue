<template lang="pug">
  div.contacts-page
    Banner(title="Контакты")
    .container
      section.section
        ContactsList.contacts-page__list
        Map(:coords="[54.727453, 20.503642]")
</template>

<script>
import Banner from '~/components/atoms/Banner'
import ContactsList from '~/components/molecules/ContactsList'
import Map from '~/components/atoms/Map'
import { headTitles } from '~/content/data'

export default {
  name: 'ContactsPage',

  components: {
    Banner,
    ContactsList,
    Map
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

<style lang="scss">
.contacts-page {
  &__list {
    margin-bottom: 60px;
  }
}
</style>
