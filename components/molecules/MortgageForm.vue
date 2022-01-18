<template lang="pug">
  .mortgage-form
    form.mortgage-form__form
      RangeInput.mortgage-form__range(placeholder="Стоимость недвижемости" :value="mortgage" icon="ruble-sign")
      RangeInput.mortgage-form__range(
        placeholder="Первоначальный взнос"
        :default="mortgage * 0.1"
        :max="mortgage * 0.9"
        @input="changePayment($event)"
        icon="ruble-sign")
      RangeInput.mortgage-form__range(
        placeholder="Срок"
        :default="period"
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
      period: 'period'
    })
  },

  methods: {
    ...mapActions('mortgage', {
      changePayment: 'changePayment',
      changePeriod: 'changePeriod'
    })
  }
}
</script>

<style lang="scss">
@import "assets/scss/base/variables";

.mortgage-form {
  display: inline-block;
  background-color: $--light-block-bg;
  padding: 40px;
  border-radius: $--bd-radius;

  &__range {
    margin-bottom: 25px;
  }

  &__button {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
