<template lang="pug">
  .small-card
    NuxtLink.small-card__link(
      v-if="!data.link"
      :to="data.dir + '/' + data.slug")

      ResponsibleImage.small-card__image(:img="data.img")
      h3.small-card__title {{ data.title }}

    a.small-card__link(
      v-else
      :target="data.target"
      @click="handleClick"
      :href="data.link")

      ResponsibleImage.small-card__image(:img="data.img")
      h3.small-card__title {{ data.title }}
</template>

<script>
export default {
  name: 'SmallCard',

  props: {
    data: {
      type: Object,
      required: true
    }
  },

  // TODO: Избавиться от этого метода
  methods: {
    handleClick (event) {
      if (!this.data.target) { event.preventDefault() }
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/base/variables";

.small-card {
  display: inline-block;
  width: 100%;

  &__link {
    position: relative;
    display: flex;
    width: 100%;
    height: 250px;
    text-decoration: none;
    border-radius: $--bd-radius;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      display: inline-block;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, rgba(19, 19, 19, .59), rgba(19, 19, 19, 0) 62.39%);
      z-index: 2;
    }

    &:hover,
    &:focus {
      .small-card__image img {
        transform: scale(1.1);
      }
    }

    &_disabled {
      pointer-events: none;
    }
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    img {
      transition: all 0.3s ease;
    }
  }

  &__title {
    position: relative;
    font-size: 40px;
    color: #fff;
    z-index: 2;
    padding: 20px;

    @media screen and (max-width: 540px) {
      font-size: 30px;
    }
  }
}
</style>
