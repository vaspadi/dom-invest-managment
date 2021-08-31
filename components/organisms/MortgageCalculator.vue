<template lang="pug">
  .mortgage-calculator
    MortgageForm
    .mortgage-calculator__column
      MortgageDescription.mortgage-calculator__description
      MortgageNotification.mortgage-calculator__notification
</template>

<script>
import MortgageForm from '~/components/molecules/MortgageForm'
import MortgageDescription from '~/components/atoms/MortgageDescription'
import MortgageNotification from '~/components/atoms/MortgageNotification'

export default {
  name: 'MortgageCalculator',

  components: {
    MortgageForm,
    MortgageDescription,
    MortgageNotification
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

  &__description {
    margin-bottom: 40px;
  }

  &__notification {
    height: 100%;
  }
}
</style>
