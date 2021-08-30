<template lang="pug">
  aside.apartments-filters(:class="{'apartments-filters_fixed': fixed}")
    TextInput.apartments-filters__control(placeholder="Название жилого комплекса")
    RangeInput.apartments-filters__control(placeholder="Потолок стоимости")
    Select.apartments-filters__control
    RangeInput.apartments-filters__control(placeholder="Общая площадь")
    RangeInput.apartments-filters__control(placeholder="Жилая площадь")
    RangeInput.apartments-filters__control(placeholder="Этажность" :max="40")
</template>

<script>
import TextInput from '~/components/atoms/controls/TextInput'
import RangeInput from '~/components/atoms/controls/RangeInput'
import Select from '~/components/atoms/controls/Select'

export default {
  name: 'ApartmentsFilters',

  components: {
    TextInput,
    RangeInput,
    Select
  },

  data () {
    return {
      fixed: false,
      elTop: 0
    }
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
    doFixed () {
      this.fixed = window.pageYOffset >= this.elTop - 150
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/base/variables";
.apartments-filters {
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
