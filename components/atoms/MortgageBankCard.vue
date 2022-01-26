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

  @media screen and (max-width: 720px) {
    flex-direction: column;
    align-items: center;
    padding: 30px;
  }

  &__image-wrap {
    flex: 1;
    display: flex;
    align-items: center;
    margin-right: 20px;

    @media screen and (max-width: 720px) {
      margin-right: 0;
      margin-bottom: 30px;
    }
  }

  &__image {
    width: 100%;
    max-height: 30px;
    object-fit: contain;

    @media screen and (max-width: 720px) {
      max-height: 60px;
    }
  }

  &__list {
    flex: 2;
    display: flex;
    justify-content: space-around;
  }

  &__item {
    display: flex;
    flex-direction: column;
    line-height: 1;
    text-align: center;

    @media screen and (min-width: 721px) {
      text-align: left;

      &:last-child {
        min-width: 200px;
      }
    }

    &:not(:last-child) {
      margin-right: 30px;
    }
  }

  &__item-title {
    font-weight: 400;
    margin-bottom: 5px;
  }

  &__value {
    font-size: 25px;
    font-weight: 700;

    @media screen and (min-width: 721px) {
      white-space: nowrap;
    }

    span {
      font-size: 0.9em;
      white-space: nowrap;
    }
  }

  &__icon {
    font-size: 20px;
    margin-left: 5px;
  }
}
</style>
