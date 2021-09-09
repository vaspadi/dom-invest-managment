<template lang="pug">
  .apartments-list
    .apartments-list__lenght Найдено: {{ apartments.length }}
    ul.apartments-list__list
      li.apartments-list__item(v-for="(item, index) in apartments" :key="index")
        ApartmentsCard(:data="item")
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
  position: relative;

  &__lenght {
    position: absolute;
    top: -40px;
    right: 20px;
    font-size: 18px;
    font-weight: 700;
    text-transform: lowercase;
    color: rgba(0,0,0,0.5);

    &:hover {
      color: #000
    }
  }

  &__item {
    margin-bottom: 20px;
  }
}
</style>
