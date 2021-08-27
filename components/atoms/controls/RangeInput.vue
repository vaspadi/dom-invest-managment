<template lang="pug">
  .range(:class="{ range_active: !value }" @input="$emit('input', curValue)")
    label.range__label
      input.range__input(v-model="curValue" :disabled="value" @input="validateCurValue")
      p.range__placeholder(v-if="placeholder") {{ placeholder }}
    input.range__range(
      type="range"
      tabindex="-1"
      v-model="curValue"
      :step="step"
      :min="min"
      :max="max"
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
      default: 0
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
      this.curValue = this.curValue.replace(/[^0-9]/g, '')

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

.range {
  position: relative;
  font-size: 16px;

  &_active {
    &:hover {
      .range__placeholder {
        color: #000
      }
    }
  }

  &__placeholder {
    position: absolute;
    left: 1.2em;
    top: 0.5em;
    font-size: 1em;
    text-transform: lowercase;
    font-weight: 700;
    color: rgba(0,0,0, 0.5)
  }

  &__input {
    width: 100%;
    font-size: 1.2em;
    font-weight: 700;
    background-color: #fff;
    padding-top: 1.7em;
    padding-bottom: 0.4em;
    padding-left: 1em;
    border: 1px solid darken($--light-block-bg, 3%);
    border-radius: $--bd-radius;
    transition: all 0.1s;

    &:focus + .range__placeholder {
      color: #000
    }
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
