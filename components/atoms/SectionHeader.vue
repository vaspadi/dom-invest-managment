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

  @media screen and (max-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
  }

  &__description {
    font-size: 25px;

    @media screen and (max-width: 720px) {
      font-size: 20px;
    }
  }

  &__right {
    @media screen and (max-width: 960px) {
      align-self: center;
    }
  }

  &__link {
    display: inline-block;
    margin: 0 50px;

    @media screen and (max-width: 1140px) {
      font-size: 20px;
      margin: 0 30px;
    }

    @media screen and (max-width: 960px) {
      //font-size: 25px;
      margin: 30px 0 0;
    }
  }
}
</style>
