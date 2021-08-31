<template lang="pug">
  .double-from-to-input
    FromToInput.double-from-to-input__input(from :placeholder="placeholder")
    FromToInput.double-from-to-input__input
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
  }
}
</script>

<style lang="scss">
.double-from-to-input {
  display: flex;

  &:hover {
    .from-to-input__placeholder {
      color: #000
    }
  }

  &__input {
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
