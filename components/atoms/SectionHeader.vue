<template lang="pug">
  .section-header
    .section-header__left
      h2.section-header__title.title {{ data.title}}
      p.section-header__description {{ data.description }}

    .section-header__right
      NuxtLink.section-header__link.button(:to="data.button.url" :class="{ 'button_light': light }") {{ data.button.text }}
</template>

<script>
export default {
  name: 'SectionHeader',

  props: {
    data: {
      type: Object,
      required: true
    },

    light: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__description {
    font-size: 25px;
  }

  &__link {
    margin: 0 60px;
  }
}
</style>
