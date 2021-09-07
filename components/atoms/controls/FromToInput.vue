<template lang="pug">
  .from-to-input.input
    input.from-to-input__input(type="number" v-model="value" @input="$emit('input', value)")
    p.from-to-input__placeholder {{ placeholder }}
    div.from-to-input__from-to {{ from ? 'От' : 'До'}}
    icon.range-input__icon.input__icon(v-if="icon" icon="ruble-sign")
</template>

<script>
export default {
  name: 'FromToInput',

  props: {
    placeholder: {
      type: String,
      default: ''
    },

    from: {
      type: Boolean,
      default: false
    },

    icon: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      value: null
    }
  }
}
</script>

<style lang="scss">
.from-to-input {
  &__input {
    padding-left: 50px !important;
  }

  &__from-to {
    position: absolute;
    top: 50%;
    left: 20px;
    font-weight: 700;
    color: rgb(0,0,0,0.5);
    text-transform: lowercase;
  }
}
</style>
