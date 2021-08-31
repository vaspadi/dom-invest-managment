<template lang="pug">
  .radio-buttons
    p.radio-buttons__placeholder {{ placeholder }}
    .radio-buttons__list
      label.radio-buttons__label(v-for="(item, index) in data" :key="index")
        input.radio-buttons__button(:type="type" v-model="value" :value="item")
        p.radio-buttons__text {{ item }}
</template>

<script>
export default {
  name: 'RadioButtons',

  props: {
    name: {
      type: String,
      default: ''
    },

    type: {
      type: String,
      default: 'radio'
    },

    placeholder: {
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
      value: []
    }
  }
}
</script>

<style lang="scss">
@import 'assets/scss/base/variables';

.radio-buttons {
  display: flex;
  flex-direction: column;
  font-size: 16px;

  &:hover .radio-buttons__placeholder {
    color: #000;
  }

  &__placeholder {
    font-weight: 700;
    color: rgba(0, 0, 0, 0.5);
    text-transform: lowercase;
    margin-bottom: 5px;
    padding-left: 20px;
  }

  &__list {
    display: flex;
  }

  &__label {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    background-color: #fff;
    border: 1px solid darken($--light-block-bg, 3%);
    border-right-width: 0;
    cursor: pointer;

    &:first-child {
      border-radius: $--bd-radius 0 0 $--bd-radius;
    }

    &:last-child {
      border-radius: 0 $--bd-radius $--bd-radius 0;
      border-right-width: 1px;
    }
  }

  &__button {
    display: inline-block;
    height: 0;
    width: 0;
    opacity: 0;

    &:checked {
      + .radio-buttons__text {
        background-color: #000;
        color: #fff
      }
    }
  }

  &__text {
    width: 100%;
    height: 100%;
    text-align: center;
    padding: 0.5em 0;
    border-radius: inherit;
  }
}
</style>
