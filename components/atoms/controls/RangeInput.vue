<template lang="pug">
  .range-input.input(:class="{ 'range_active': !value }" @input="$emit('input', curValue)")
    label.range-input__label
      input.range-input__input(v-model="curValue" type="text" :disabled="value" @input="validateCurValue")
      p.range-input__placeholder(v-if="placeholder") {{ placeholder }}
      icon.range-input__icon.input__icon(v-if="icon" icon="ruble-sign")
      div.range-input__square.input__icon(v-if="square") м<sup>2</sup>
    input.range-input__range(
      type="range"
      tabindex="-1"
      v-model="curValue"
      :step="step"
      :min="min"
      :max="max"
      multiple
      :disabled="value"
      @input="validateCurValue")
</template>

<script>
export default {
  name: 'RangeInput',

  props: {
    placeholder: {
      type: String,
      default: ''
    },

    icon: {
      type: String,
      default: ''
    },

    square: {
      type: Boolean,
      default: false
    },

    value: {
      type: Number,
      default: null
    },

    default: {
      type: Number,
      default: 0
    },

    min: {
      type: Number,
      default: 1
    },

    max: {
      type: Number,
      default: 100000000
    },

    step: {
      type: Number,
      default: 1
    }
  },

  data () {
    return {
      curValue: this.value || this.default
    }
  },

  methods: {
    validateCurValue () {
      this.curValue = this.curValue.replace(/^0+|[^0-9]/g, '')

      const curValue = this.curValue
      const min = this.min
      const max = this.max

      this.curValue = curValue < min ? min : curValue
      this.curValue = curValue > max ? max : curValue
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/base/variables";

.range-input {
  height: 4.375em;

  &__placeholder {
    width: 100%;
    padding-right: 40px;
    pointer-events: none;
  }

  &__range {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    width: 100%;
    height: 0.2em;
    font-size: inherit;
    background-color: #000;
    border-radius: 0 0 $--bd-radius $--bd-radius;
    transform: translateY(-100%);
    appearance: none;

    &::-webkit-slider-thumb {
      width: 0.9em;
      height: 0.9em;
      background-color: #000;
      border: 0.15em solid #fff;
      border-radius: 50%;
      appearance: none;
    }

    &::-moz-range-thumb {
      width: 0.6em;
      height: 0.6em;
      background-color: #000;
      border: 0.15em solid #fff;
      border-radius: 50%;
      -webkit-appearance: none;
      appearance: none;
    }
  }
}
</style>
