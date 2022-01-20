<template lang="pug">
  div.apartments-page
    section.section.container.apartments-page__content
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
  &__content {
    display: flex;
    align-items: start;

    @media screen and (max-width: 1140px) {
      flex-direction: column;
    }
  }

  &__list {
    flex: 1;
    padding-left: 60px;

    @media screen and (max-width: 1140px) {
      padding-left: 0;
      margin-top: 70px;
    }
  }
}
</style>
