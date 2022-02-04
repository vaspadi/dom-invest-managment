<template lang="pug">
  div.cards-section
    ul.cards-section__list(v-if="data.length")
      li.cards-section__item(v-for="(item, index) in data" :key="index")
        compoent(:is="component" :data="item")

    div.no-data(v-else) Нет данных
</template>

<script>

export default {
  name: 'CardsSection',

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
        return () => import('~/components/molecules/SmallCard')
      } else {
        return () => import('~/components/molecules/Card')
      }
    }
  }
}
</script>

<style lang="scss">
.cards-section {
  width: 100%;

  &__list {
    display: flex;
    flex-wrap: wrap;
  }

  &__item {
    display: flex;
    width: 32%;
    margin-bottom: 60px;

    @media screen and (min-width: 1141px) {
      &:nth-child(3n+1) {
        margin-right: 2%;
      }

      &:nth-child(3n+3) {
        margin-left: 2%;
      }
    }

    @media screen and (max-width: 1140px) {
      width: 48%;

      &:nth-child(1n) {
        margin-right: 1%;
      }

      &:nth-child(2n) {
        margin-left: 1%;
      }
    }

    @media screen and (max-width: 720px) {
      width: 100%;
      margin-right: 0;
      margin-left: 0;
      margin-bottom: 30px;
    }

  }
}
</style>
