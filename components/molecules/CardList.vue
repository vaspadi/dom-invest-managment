<template lang="pug">
  ul.cards-section__list
    li.cards-section__item(v-for="(item, index) in data" :key="index")
      compoent(:is="component" :data="item")
</template>

<script>
import Card from '~/components/molecules/Card'
import SmallCard from '~/components/molecules/SmallCard'

export default {
  name: 'CardsSection',

  components: {
    Card,
    SmallCard
  },

  props: {
    data: {
      type: Array,
      required: true
    },

    small: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    component () {
      if (this.small) {
        return SmallCard
      } else {
        return Card
      }
    }
  }
}
</script>

<style lang="scss">
.cards-section {
  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  &__item {
    display: flex;
    width: 32%;
    margin-bottom: 60px;

    &:nth-child(3n+1) {
      margin-right: 2%;
    }

    &:nth-child(3n+3) {
      margin-left: 2%;
    }
  }
}
</style>
