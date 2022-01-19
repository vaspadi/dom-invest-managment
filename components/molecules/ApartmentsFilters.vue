<template lang="pug">
  aside.apartments-filters
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
      complexes: ['Кислород'],
      numRooms: ['1', '2', '3+']
    }
  },

  computed: {
    ...mapState('apartments', {
      filters: 'filters'
    })
  },

  methods: {
    ...mapActions('apartments', {
      changeFilter: 'changeFilter'
    })
  }
}
</script>

<style lang="scss">
@import "assets/scss/base/variables";
.apartments-filters {
  width: 100%;
  max-width: 350px;
  background-color: $--light-block-bg;
  padding: 40px;
  border-radius: $--bd-radius;

  &__control {
    margin-bottom: 25px;
  }
}
</style>
