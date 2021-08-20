<template lang="pug">
  .contacts-list
    ul.contacts-list__list
      li.contacts-list__item(v-for="(item,index) in contacts" :key="index")
        ContactItem(:data="item")
</template>

<script>
import ContactItem from '~/components/atoms/ContactItem'
import { contacts } from '~/content/data'

export default {
  name: 'ContactsList',

  components: {
    ContactItem
  },

  data () {
    return {
      contacts
    }
  }
}
</script>

<style lang="scss">
.contacts-list {
  &__list {
    display: flex;
    justify-content: space-around;
  }
}
</style>
