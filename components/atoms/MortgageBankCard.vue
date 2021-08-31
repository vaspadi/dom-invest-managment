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
        p.mortgage-bank-card__value {{ monthSum }} <span>руб/мес</span>
</template>

<script>
// import { mapState } from 'vuex'

export default {
  name: 'MortgageBankCard',

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
  //
  // computed: {
  //   monthSum () {
  //   //   const firstAction = (this.mortgage - this.payment) * (this.rate / 12)
  //   //   const secondAction = 1 - (1 + this.rate / 12) * (1 - this.period * 12)
  //   //   return firstAction / secondAction
  //     return 'asdf'
  //   }
  // }
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
    line-height: 1;
  }

  &__item-title {
    font-weight: 400;
    margin-bottom: 5px;
  }

  &__value {
    font-size: 25px;
    font-weight: 700;
  }

  &__icon {
    font-size: 20px;
    margin-left: 5px;
  }
}
</style>
