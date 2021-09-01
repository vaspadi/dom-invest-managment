<template lang="pug">
  aside.apartments-filters(:class="{'apartments-filters_fixed': fixed}" )
    TextInput.apartments-filters__control(
      placeholder="Название жилого комплекса"
      @input="changeFilter({value: $event, filter: 'complex'})")

    RadioButtons.apartments-filters__control(
      :data="numRooms"
      placeholder="Количество комнат"
      type="checkbox"
      name="rooms"
      @change="changeFilter({value: $event, filter: 'roomsNum'})")

    FromToInput.apartments-filters__control(
      icon
      placeholder="Стоимость"
      @input="changeFilter({value: $event, filter: 'price'})")

    RangeInput.apartments-filters__control(
      square
      placeholder="Общая площадь"
      @input="changeFilter({value: $event, filter: 'totalArea'})")

    RangeInput.apartments-filters__control(
      square
      placeholder="Жилая площадь"
      @input="changeFilter({value: $event, filter: 'floorArea'})")

    DoubleFromToInput.apartments-filters__control(
      placeholder="Этажность"
      @input="changeFilter({value: $event, filter: 'height'})")
</template>

<script>
import { mapState, mapActions } from 'vuex'
import TextInput from '~/components/atoms/controls/TextInput'
import RangeInput from '~/components/atoms/controls/RangeInput'
import RadioButtons from '~/components/atoms/controls/RadioButtons'
import FromToInput from '~/components/atoms/controls/FromToInput'
import DoubleFromToInput from '~/components/molecules/DoubleFromToInput'

export default {
  name: 'ApartmentsFilters',

  components: {
    TextInput,
    RangeInput,
    RadioButtons,
    FromToInput,
    DoubleFromToInput
  },

  data () {
    return {
      fixed: false,
      elTop: 0,
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
