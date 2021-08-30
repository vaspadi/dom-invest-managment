<template lang="pug">
  .select(v-click-outside="hideDropdown" @click="active = true")
    p.select__value(:class="{'select__value_active': active}") {{ value }}
    ul.select__list(v-if="active")
      li.select__item
        label.select__label
          input.select__input(type="radio" v-model="value" value="Петербург" :name="name")
          p.select__text Петербург
      li.select__item
        label.select__label
          input.select__input(type="radio" v-model="value" value="Калининград" :name="name")
          p.select__text Калининград
      li.select__item
        label.select__label
          input.select__input(type="radio" v-model="value" value="Волгоград" :name="name")
          p.select__text Волгоград

</template>

<script>
export default {
  name: 'Select',

  props: {
    name: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      active: false,
      value: 'Петербург'
    }
  },

  watch: {
    value () {
      this.active = false
    }
  },

  methods: {
    hideDropdown () {
      this.active = false
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/base/variables';

.select {
  font-size: 16px;

  &__value {
    font-size: 1.2em;
    font-weight: 700;
    background-color: #fff;
    padding: 0.5em 1em;
    border: 1px solid darken($--light-block-bg, 3%);
    border-radius: $--bd-radius;
    cursor: pointer;

    &_active {
      border-bottom: none;
      border-radius: $--bd-radius $--bd-radius 0 0;
    }
  }

  &__list {
    display: inline-block;
    width: 100%;
    background-color: #fff;
    border: 1px solid darken($--light-block-bg, 3%);
    border-top: none;
    z-index: 2;
  }

  &__label {
    position: relative;
    display: flex;
    font-weight: 700;
    color: rgba(0,0,0,0.5);
    padding: 0.5em 1em;
    cursor: pointer;

    &:hover,
    &:focus {
      color: #000;
    }
  }

  &__input {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }

  &__text {
    white-space: nowrap;
    overflow: hidden;
  }
}
</style>
