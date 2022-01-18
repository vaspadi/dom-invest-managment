<template lang="pug">
  aside.apartments-filters(:class="{'apartments-filters_fixed': fixed}" )
    Select.apartments-filters__control(
      placeholder="Жилой комплекс"
      name="complex"
      :data="complexes")

    RadioButtons.apartments-filters__control(
      :data="numRooms"
      placeholder="Количество комнат"
      type="checkbox"
      name="rooms"
      @change="changeFilter({value: $event, filter: 'roomsNum'})")

    FromToInput.apartments-filters__control(
      icon
      placeholder="Стоимость"
      @input="changeFilter({value: $event, filter: 'cost'})")

    RangeInput.apartments-filters__control(
      square
      placeholder="Общая площадь"
      :max="150"
      @input="changeFilter({value: $event, filter: 'apartmentArea'})")

    RangeInput.apartments-filters__control(
      square
      placeholder="Жилая площадь"
      :max="100"
      @input="changeFilter({value: $event, filter: 'livingArea'})")

    DoubleFromToInput.apartments-filters__control(
      placeholder="Этажность"
      @input="changeFilter({value: $event, filter: 'floorNum'})")
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TextInput from '~/components/atoms/controls/TextInput'
import Select from '~/components/atoms/controls/Select'
import RangeInput from '~/components/atoms/controls/RangeInput'
import RadioButtons from '~/components/atoms/controls/RadioButtons'
import FromToInput from '~/components/atoms/controls/FromToInput'
import DoubleFromToInput from '~/components/molecules/DoubleFromToInput'

export default {
  name: 'ApartmentsFilters',

  components: {
    TextInput,
    Select,
    RangeInput,
    RadioButtons,
    FromToInput,
    DoubleFromToInput
  },

  data () {
    return {
      fixed: false,
      elTop: 0,
      complexes: ['Кислород'],
      numRooms: ['1', '2', '3+']
    }
  },

  computed: {
    ...mapState('apartments', {
      filters: 'filters'
    })
  },

  mounted () {
    if (process.browser) {
      this.elTop = this.$el.offsetTop
      this.doFixed()
      window.addEventListener('scroll', this.doFixed)
    }
  },

  destroyed () {
    if (process.browser) {
      window.removeEventListener('scroll', this.doFixed)
    }
  },

  methods: {
    ...mapActions('apartments', {
      changeFilter: 'changeFilter'
    }),

    doFixed () {
      this.fixed = window.pageYOffset >= this.elTop - 150
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/base/variables";
.apartments-filters {
  position: absolute;
  width: 350px;
  background-color: $--light-block-bg;
  max-height: 75vh;
  padding: 40px;
  overflow-y: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &_fixed {
    position: fixed;
    top: 130px;
  }

  &__control {
    margin-bottom: 25px;
  }
}
</style>
