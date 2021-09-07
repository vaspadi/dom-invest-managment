<template lang="pug">
  .apartments-list
    ul.apartments-list__list
      .ap {{ apartments.length }}
      li.apartments-list__item(v-for="index in 3" :key="index")
        ApartmentsCard
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ApartmentsCard from '~/components/atoms/ApartmentsCard'

export default {
  name: 'ApartmentsList',

  components: {
    ApartmentsCard
  },

  computed: {
    ...mapState('apartments', {
      apartments: 'apartments'
    })
  },

  mounted () {
    this.getApartment()
  },

  methods: {
    ...mapActions('apartments', {
      getApartment: 'getApartments'
    })
  }
}
</script>

<style lang="scss">
.apartments-list {
  &__item {
    margin-bottom: 20px;
  }
}
</style>
