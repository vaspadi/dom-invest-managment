<template lang="pug">
  div.contacts-page
    .container
      section.section
        ContactsList.contacts-page__list
        Map(:coords="[54.743047, 20.485505]")
</template>

<script>
import ContactsList from '~/components/molecules/ContactsList'
import Map from '~/components/atoms/Map'
import { contacts } from '~/content/meta'

export default {
  name: 'ContactsPage',

  meta: {
    bannerTitle: 'Контакты'
  },

  components: {
    ContactsList,
    Map
  },

  head () {
    return {
      title: contacts.title,
      meta: [
        { hid: 'description', name: 'description', content: contacts.description }
      ]
    }
  }
}
</script>

<style lang="scss">
.contacts-page {
  &__list {
    margin-bottom: 60px;
  }
}
</style>
