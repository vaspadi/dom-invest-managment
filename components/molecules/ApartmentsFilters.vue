<template lang="pug">
  .apartments-filters
    div.apartments-filters__button(v-show="!bigScreen")
      button(@click="isActive = !isActive") Фильтры
      div.apartments-filters__button-triangle(:class="{ 'apartments-filters__button-triangle_active': isActive }")

    aside.apartments-filters__aside(v-show="isActive || bigScreen")
      Select.apartments-filters__control(
        placeholder="Жилой комплекс"
        name="complex"
        :data="complexes")

      RadioButtons.apartments-filters__control(
        :data="numRooms"
        placeholder="Количество комнат"
        type="checkbox"
        name="rooms"
        @change="handleChangeFilter({value: $event, filter: 'roomsNum'})")

      FromToInput.apartments-filters__control(
        icon
        placeholder="Стоимость"
        @input="handleChangeFilter({value: $event, filter: 'cost'})")

      RangeInput.apartments-filters__control(
        square
        placeholder="Общая площадь"
        :max="150"
        @input="handleChangeFilter({value: $event, filter: 'apartmentArea'})")

      RangeInput.apartments-filters__control(
        square
        placeholder="Жилая площадь"
        :max="100"
        @input="handleChangeFilter({value: $event, filter: 'livingArea'})")

      DoubleFromToInput.apartments-filters__control(
        placeholder="Этажность"
        @input="handleChangeFilter({value: $event, filter: 'floorNum'})")
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
      isActive: false,
      bigScreen: false,
      timer: null,
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
    this.onResize()
    window.addEventListener('resize', this.onResize)

    this.isActive = this.bigScreen
  },

  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    ...mapActions('apartments', {
      changeFilter: 'changeFilter'
    }),

    onResize () {
      this.bigScreen = window.innerWidth > 1140
    },

    handleChangeFilter (data) {
      clearTimeout(this.timer)

      this.timer = setTimeout(() => {
        this.changeFilter(data)
      }, 200)
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/base/variables";

.apartments-filters {
  width: 100%;

  @media screen and (min-width: 1141px) {
    max-width: 350px;
  }

  &__button {
    position: relative;

    button {
      display: inline-block;
      width: 100%;
      font-size: 20px;
      font-weight: 700;
      text-transform: lowercase;
      text-align: left;
      color: rgba(0,0,0,0.5);
      background-color: $--light-block-bg;
      padding: 10px 20px;
      border: none;
      border-radius: $--bd-radius;
      cursor: pointer;

      &:hover,
      &:focus {
        color: black;

        & + .apartments-filters__button-triangle {
          opacity: 1;
        }
      }
    }
  }

  &__button-triangle {
      display: inline-block;
      position: absolute;
      top: 50%;
      right: 20px;
      border: 6px solid transparent;
      border-right: 4px solid black;
      border-bottom: 4px solid black;
      transform: translateY(-50%) rotateZ(-45deg);
      opacity: 0.5;
      transition: all 0.1s;

      &_active {
        transform: translateY(-50%) rotateZ(45deg);
      }
  }

  &__aside {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    justify-content: space-between;
    width: 100%;
    background-color: $--light-block-bg;
    padding: 30px 30px 5px;
    border-radius: $--bd-radius;
    margin-top: 20px;

    @media screen and (min-width: 721px) {
      padding: 40px 40px 15px;
    }

    @media screen and (min-width: 1141px) {
      margin-top: 0;
    }
  }

  &__control {
    width: 100%;
    margin-bottom: 25px;

    @media screen and (min-width: 541px) {
      width: 48%;
    }

    @media screen and (min-width: 721px) {
      width: 32%;
    }

    @media screen and (min-width: 1141px) {
      width: 100%;
    }
  }
}
</style>
