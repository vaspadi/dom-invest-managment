<template lang="pug">
  .mortgage-bank-card
    .mortgage-bank-card__image-wrap
      img.mortgage-bank-card__image(:src="require(`~/assets/img/${img}`)")
    ul.mortgage-bank-card__list
      li.mortgage-bank-card__item
        p.mortgage-bank-card__item-title Ставка
        p.mortgage-bank-card__value {{ rate }}
          icon.mortgage-bank-card__icon(icon="percent")

      li.mortgage-bank-card__item
        p.mortgage-bank-card__item-title Период
        p.mortgage-bank-card__value {{ period }} <span>лет</span>

      li.mortgage-bank-card__item
        p.mortgage-bank-card__item-title Кредит
        p.mortgage-bank-card__value {{ smartRound(monthSum) }} <span>руб/мес</span>
</template>

<script>
import formatter from '~/mixin/formatter'

export default {
  name: 'MortgageBankCard',

  mixins: [formatter],

  props: {
    img: {
      type: String,
      default: ''
    },

    rate: {
      type: Number,
      default: 0
    },

    period: {
      type: Number,
      default: 0
    },

    monthSum: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/base/variables";

.mortgage-bank-card {
  display: flex;
  justify-content: space-between;
  background-color: $--light-block-bg;
  border-radius: $--bd-radius;
  padding: 20px 40px;

  &__image-wrap {
    flex: 1;
    display: flex;
    align-items: center;
    margin-right: 20px;
  }

  &__image {
    max-height: 30px;
  }

  &__list {
    flex: 2;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  &__item {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 100px;
    line-height: 1;

    &:last-child {
      flex: 1.5
    }
  }

  &__item-title {
    font-weight: 400;
    margin-bottom: 5px;
  }

  &__value {
    white-space: nowrap;
    font-size: 25px;
    font-weight: 700;
  }

  &__icon {
    font-size: 20px;
    margin-left: 5px;
  }
}
</style>
