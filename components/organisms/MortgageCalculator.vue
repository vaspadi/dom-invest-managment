<template lang="pug">
  .mortgage-calculator
    MortgageForm.mortgage-calculator__form
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

  @media screen and (max-width: 1140px) {
    flex-direction: column;

    .mortgage-calculator__form {
      margin-right: 0;
      margin-bottom: 40px;
    }
  }

  &__form {
    flex: 1;
    margin-right: 6.5vw;
  }

  &__column {
    flex: 2;
    display: flex;
    flex-direction: column;

    // @media screen and (max-width: 1140px) {
    //   flex-flow: row wrap;
    //   justify-content: space-between;
    // }
  }

  &__card {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: auto;
    }

    // @media screen and (max-width: 1140px) {
    //   width: 32%;
    //   margin-bottom: 0;
    // }
  }

  &__notification {
    margin-top: auto;

    @media screen and (max-width: 1140px) {
      width: 100%;
      margin-top: 20px;
    }
  }
}
</style>
