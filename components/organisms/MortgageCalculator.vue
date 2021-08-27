<template lang="pug">
  .mortgage-calculator
    MortgageForm
    .mortgage-calculator__description
      p.mortgage-calculator__rate Ставка {{ rate }}%
      p.mortgage-calculator__month-sum Кредит {{ monthSum.toFixed(2) }} руб/мес на {{ period }} лет
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import MortgageForm from '~/components/molecules/MortgageForm'

export default {
  name: 'MortgageCalculator',

  components: {
    MortgageForm
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

.mortgage-calculator {
  display: flex;
  justify-content: space-between;
  margin: 0 -20px;

  & > * {
    //flex: 1;
    margin: 0 20px;
  }

  &__description {
    //flex: 2;
    position: relative;
    font-size: 40px;
    font-weight: 700;
    text-transform: lowercase;
    background-color: $--light-block-bg;
    padding: 40px;
    border-radius: $--bd-radius;
  }
}
</style>
