<template lang="pug">
  .mortgage-form
    form.mortgage-form__form
      RangeInput.mortgage-form__range(
        placeholder="Стоимость недвижемости"
        :value="mortgage"
        :min="3000000"
        :max="40000000"
        icon="ruble-sign"
        @input="changeMortgage")

      RangeInput.mortgage-form__range(
        placeholder="Первоначальный взнос"
        :value="payment"
        :max="mortgage * 0.9"
        @input="changePayment($event)"
        icon="ruble-sign")

      RangeInput.mortgage-form__range(
        placeholder="Срок"
        :value="period"
        :min="5"
        :max="30"
        :step="5"
        @input="changePeriod($event)")
</template>

<script>
import { mapState, mapActions } from 'vuex'
import RangeInput from '~/components/atoms/controls/RangeInput'

export default {
  name: 'MortgageForm',

  components: {
    RangeInput
  },

  computed: {
    ...mapState('mortgage', {
      mortgage: 'mortgage',
      payment: 'payment',
      period: 'period'
    })
  },

  methods: {
    ...mapActions('mortgage', {
      changePayment: 'changePayment',
      changePeriod: 'changePeriod',
      changeMortgage: 'changeMortgage'
    })
  }
}
</script>

<style lang="scss">
@import "assets/scss/base/variables";

.mortgage-form {
  display: flex;
  align-items: center;
  min-width: 300px;
  background-color: $--light-block-bg;
  padding: 40px;
  border-radius: $--bd-radius;

  @media screen and (max-width: 1140px) {
    padding: 30px 20px 5px;
  }

  &__form {
    width: 100%;

    @media screen and (max-width: 1140px) and (min-width: 721px) {
      display: flex;
      justify-content: space-between;
    }
  }

  &__range {
    margin-bottom: 25px;

    @media screen and (max-width: 1140px) and (min-width: 721px) {
      width: 100%;

      &:not(:last-child) {
        margin-right: 25px;
      }
    }
  }

  &__button {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
