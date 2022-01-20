<template lang="pug">
  .select(v-click-outside="hideDropdown" @click="active = true")
    p.select__placeholder(v-if="placeholder") {{ placeholder }}
    p.select__value(:class="{'select__value_active': active}") {{ value }}
    ul.select__list(v-if="active")
      li.select__item(v-for="(item, index) in data" :key="index")
        label.select__label
          input.select__input(type="radio" v-model="value" :value="item" :name="name")
          p.select__text {{ item }}

</template>

<script>
export default {
  name: 'Select',

  props: {
    placeholder: {
      type: String,
      default: ''
    },

    name: {
      type: String,
      default: ''
    },

    data: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      active: false,
      value: this.data[0]
    }
  },

  watch: {
    value () {
      this.hideDropdown()
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
  height: 4.375em;
  display: flex;
  flex-direction: column;

  &:hover {
    .select__placeholder {
      color: #000
    }
  }

  &__placeholder {
    font-weight: 700;
    color: rgba(0, 0, 0, 0.5);
    text-transform: lowercase;
    margin-bottom: 5px;
    padding-left: 20px;
  }

  &__value {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: 1.2em;
    font-weight: 700;
    background-color: #fff;
    padding: 0 1em;
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
