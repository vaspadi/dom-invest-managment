<template lang="pug">
  .double-from-to-input(@input="$emit('input', value)")
    FromToInput.double-from-to-input__input(from :placeholder="placeholder" @input="setValue({ first: $event })")
    FromToInput.double-from-to-input__input(@input="setValue({second: $event})")
</template>

<script>
import FromToInput from '~/components/atoms/controls/FromToInput'

export default {
  name: 'DoubleFromToInput',

  components: {
    FromToInput
  },

  props: {
    placeholder: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      value: [0, 100]
    }
  },

  methods: {
    setValue ({ first, second }) {
      this.value[0] = +first || this.value[0]
      this.value[1] = +second || this.value[1]
    }
  }
}
</script>

<style lang="scss">
.double-from-to-input {
  display: flex;
  width: 100%;

  &:hover {
    .from-to-input__placeholder {
      color: #000
    }
  }

  &__input {
    width: 50%;

    &:first-child {
      z-index: 2;

      .from-to-input__input {
        border-right-width: 0;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }

    &:nth-child(2) {
      .from-to-input__input {
        border-left-width: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
}
</style>
