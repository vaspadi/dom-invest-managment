<template lang="pug">
  .apartments-list
    ul.apartments-list__card
      li.apartments-list__item(v-for="(item, index) in apartments" :key="index")
        div {{ item }}
</template>

<script>
import { mapState, mapActions } from 'vuex'
// import ApartmentsCard from '~/components/atoms/ApartmentsCard'

export default {
  name: 'ApartmentsList',

  components: {
    // ApartmentsCard
  },

  // asyncData (ctx) {
  //   ctx.getApartments()
  // },

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

<style scoped>

</style>
