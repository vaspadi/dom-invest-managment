<template lang="pug">
  .range
    p.range__placeholder Первоначальный взнос
    input.range__input(v-model="value" @input="validateValue")
    input.range__range(type="range" v-model="value" :min="min" :max="max" @input="validateValue")
</template>

<script>
export default {
  name: 'RangeInput',

  props: {
    min: {
      type: Number,
      default: 0
    },

    max: {
      type: Number,
      default: 1000
    }
  },

  data () {
    return {
      value: 50
    }
  },

  methods: {
    validateValue () {
      this.value = this.value.replace(/[^0-9]/, '')

      if (this.value < this.min) {
        this.value = this.min
      } else if (this.value > this.max) {
        this.value = this.max
      }
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/base/variables";

.range {
  position: relative;
  width: 300px;
  font-size: 16px;

  &__placeholder {
    position: absolute;
    left: 1.2em;
    top: 0.5em;
    font-size: 1em;
    text-transform: lowercase;
    font-weight: 700;
    //opacity: 0.5;
  }

  &__input {
    width: 100%;
    font-size: 1.2em;
    font-weight: 700;
    background-color: $--light-block-bg;
    //padding: 1em;
    padding-top: 1.7em;
    padding-bottom: 0.4em;
    padding-left: 1em;

    border: none;
  }

  &__range {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    width: 100%;
    height: 0.25em;
    font-size: inherit;
    background-color: #000;
    border-radius: 0.5em/100%;
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
