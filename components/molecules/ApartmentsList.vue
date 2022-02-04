<template lang="pug">
  .apartments-list
    .apartments-list__lenght Найдено: {{ apartments.length }}

    ul.apartments-list__list
      li.apartments-list__item(v-for="(item, index) in currentApartments" :key="index")
        ApartmentsCard(:data="item")

    Pagination.apartments-list__pagination(
      v-show="apartments.length > 10"
      :key="pagesLength"
      :page-count="pagesLength"
      :prev-text="'<'"
      :click-handler="setPage"
      :next-text="'>'"
      :container-class="'pagination'")

    div.no-data(v-show="!apartments.length") Нет данных
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ApartmentsCard from '~/components/atoms/ApartmentsCard'

export default {
  name: 'ApartmentsList',

  components: {
    ApartmentsCard
  },

  data () {
    return {
      currentPage: 0
    }
  },

  computed: {
    ...mapState('apartments', {
      apartments: 'apartments'
    }),

    currentApartments () {
      return this.apartments.slice(this.currentPage * 10, this.currentPage * 10 + 10)
    },

    pagesLength () {
      return Math.ceil(this.apartments.length / 10)
    }
  },

  watch: {
    apartments (newVal, oldVal) {
      if (newVal.length !== oldVal.length) { this.currentPage = 0 }
    }
  },

  mounted () {
    this.getApartment()
  },

  methods: {
    ...mapActions('apartments', {
      getApartment: 'getApartments'
    }),

    setPage (int) {
      this.currentPage = int - 1
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
