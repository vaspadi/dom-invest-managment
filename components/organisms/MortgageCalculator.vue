<template lang="pug">
  .mortgage-calculator
    MortgageForm
    .mortgage-calculator__column
      MortgageBankCard.mortgage-calculator__card(
        img="banks/sberbank.svg"
        :rate="rate.sber"
        :period="period"
        :month-sum="monthSum.sber")

      MortgageBankCard.mortgage-calculator__card(
        img="banks/sankt-bank.png"
        :rate="rate.sankt"
        :period="period"
        :month-sum="monthSum.sankt")

      MortgageBankCard.mortgage-calculator__card(
        img="banks/vtb-bank.svg"
        :rate="rate.vtb"
        :period="period"
        :month-sum="monthSum.vtb")

      MortgageNotification.mortgage-calculator__notification
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import MortgageForm from '~/components/molecules/MortgageForm'
import MortgageBankCard from '~/components/atoms/MortgageBankCard'
import MortgageDescription from '~/components/atoms/MortgageDescription'
import MortgageNotification from '~/components/atoms/MortgageNotification'

export default {
  name: 'MortgageCalculator',

  components: {
    MortgageForm,
    MortgageDescription,
    MortgageBankCard,
    MortgageNotification
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
  margin: 0 -50px;

  & > * {
    flex: 1;
    margin: 0 50px;
  }

  &__column {
    flex: 2;
    display: flex;
    flex-direction: column;
  }

  &__card {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: auto;
    }
  }

  &__notification {
    margin-top: auto;
  }
}
</style>
