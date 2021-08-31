<template lang="pug">
  .text-input.input(@input="$emit('input', value)")
    label.text-input__label
      input.text-input__input(v-model="value" type="text")
      p.text-input__placeholder(v-if="placeholder") {{ placeholder }}
</template>

<script>
export default {
  name: 'TextInput',

  props: {
    placeholder: {
      type: String,
      default: ''
    }
  },

  data () {
    return {
      value: ''
    }
  }
}
</script>

<style lang="scss">

</style>
