<template lang="pug">
  .mortgage-page
    section.section.container
      MortgageCalculator
</template>

<script>
import MortgageCalculator from '~/components/organisms/MortgageCalculator'
import { mortgage } from '~/content/meta'

export default {
  name: 'Mortgage',

  meta: {
    bannerTitle: 'Ипотечный калькулятор'
  },

  components: {
    MortgageCalculator
  },

  head () {
    return {
      title: mortgage.title,
      meta: [
        { hid: 'description', name: 'description', content: mortgage.description }
      ]
    }
  }
}
</script>

<style scoped>

</style>
