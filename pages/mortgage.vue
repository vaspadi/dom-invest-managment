<template lang="pug">
  .mortgage-page
    section.section.container
      MortgageCalculator
</template>

<script>
import MortgageCalculator from '~/components/organisms/MortgageCalculator'

export default {
  name: 'Mortgage',

  meta: {
    bannerTitle: 'Ипотека'
  },

  components: {
    MortgageCalculator
  }
}
</script>

<style scoped>

</style>
