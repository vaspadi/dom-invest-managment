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
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 30px;

    @media screen and (max-width: 540px) {
      flex-direction: column;
    }
  }

  &__item {
    margin: 0 20px 30px;

    @media screen and (max-width: 540px) {
      // font-size: 14px;
      margin: 0 0 30px;
    }
  }
}
</style>
