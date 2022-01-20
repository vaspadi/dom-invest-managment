<template lang="pug">
  .apartments-list
    .apartments-list__lenght Найдено: {{ apartments.length }}
    ul.apartments-list__list
      li.apartments-list__item(v-for="(item, index) in apartments.slice(0, 10)" :key="item._id")
        ApartmentsCard(:data="item")
    Pagination.apartments-list__pagination(
      :page-count="20"
      :click-handler="changePage"
      :prev-text="'<'"
      :next-text="'>'"
      :container-class="'pagination'")
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
    }),

    changePage (int) {
      console.log(int)
    }
  }
}
</script>

<style lang="scss">
.apartments-list {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

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

  &__list {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;

    @media screen and (max-width: 720px) {
      flex-direction: row;
      justify-content: space-between;
    }
  }

  &__item {
    margin-bottom: 20px;

    @media screen and (max-width: 720px) {
      width: 100%;
    }
  }

  &__pagination {
    margin-top: 30px;
  }
}
</style>
