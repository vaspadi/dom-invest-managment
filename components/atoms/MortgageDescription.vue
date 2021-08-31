<template lang="pug">
  .mortgage-description
    //h2.mortgage-description__title.title Лучшие условия
    ul.mortgage-description__list
      li.mortgage-description__item
        icon.mortgage-description__icon(icon="percent")
        h3.mortgage-description__item-title Ставка
        p.mortgage-description__value {{ rate }}

      li.mortgage-description__item
        icon.mortgage-description__icon(icon="calendar-alt")
        h3.mortgage-description__item-title Период
        p.mortgage-description__value {{ period }} <span>лет</span>

      li.mortgage-description__item
        icon.mortgage-description__icon(icon="ruble-sign")
        h3.mortgage-description__item-title Кредит
        p.mortgage-description__value {{ Math.round(monthSum) }} <span>руб/мес</span>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'MortgageDescription',

  props: {
    data: {
      type: Array,
      required: true
    }
  },

  computed: {
    ...mapState('mortgage', {
      rate: 'rate',
      period: 'period'
    }),

    ...mapGetters('mortgage', {
      monthSum: 'monthSum'
    })
  }
}
</script>

<style lang="scss">
@import "assets/scss/base/variables";

.mortgage-description {
  background-color: $--light-block-bg;
  border-radius: $--bd-radius;
  padding: 40px;

  &__title {
    margin-bottom: 40px;
  }

  &__list {
    display: flex;
    justify-content: space-around;
  }

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    line-height: 1;
  }

  &__icon {
    font-size: 50px;
    margin-bottom: 20px;
  }

  &__item-title {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 20px;
  }

  &__value {
    font-weight: 700;
    font-size: 40px;

    span {
      display: block;
      font-size: 20px;
      font-weight: 400;
    }
  }
}
</style>
