<template lang="pug">
  .text-block(:class="{ 'text-block_dark': dark }")
    ul.text-block__list.list(:class="{ 'list_light': dark }")
      li.text-block__item.list__item(v-for="(item, index) in data" :key="index") {{ item }}
</template>

<script>
export default {
  name: 'TextBlock',

  props: {
    dark: {
      type: Boolean,
      default: false
    },

    data: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/base/variables";

.text-block {
  font-size: 22px;
  background-color: $--light-block-bg;
  padding: 40px;
  border-radius: $--bd-radius;

  &_dark {
    background-color: $--dark-block-bg;
  }
}
</style>
