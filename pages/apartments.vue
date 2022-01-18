<template lang="pug">
  div.apartments-page
    section.section.container
      ApartmentsFilters
      ApartmentsList.apartments-page__list
</template>

<script>
import ApartmentsFilters from '~/components/molecules/ApartmentsFilters'
import ApartmentsList from '~/components/molecules/ApartmentsList'
import { headTitles } from '~/content/data'

export default {
  name: 'ApartmentsPage',

  components: {
    ApartmentsFilters,
    ApartmentsList
  },

  meta: {
    bannerTitle: 'Квартиры'
  },

  data () {
    return {
      headTitles
    }
  },

  head: () => ({
    title: headTitles.apartments
  })
}
</script>

<style lang="scss">
.apartments-page {
  margin-bottom: 200vh;

  &__list {
    margin-left: 400px;
  }
}
</style>
