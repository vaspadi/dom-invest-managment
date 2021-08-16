<template lang="pug">
section.banner
  ResponsibleImage.banner__image(:img="img")
  .container.banner__content
    h1.banner__title {{ title }}
</template>

<script>
import ResponsibleImage from '~/components/global/ResponsibleImage'

export default {
  name: 'Banner',

  components: {
    ResponsibleImage
  },

  props: {
    title: {
      type: String,
      default: ''
    },

    img: {
      type: String,
      default: 'main-slider/img7.jpg'
    }
  }
}
</script>

<style lang="scss">
.banner {
  position: relative;
  height: 50vh;
  min-height: 400px;

  @media screen and (max-width: 720px) {
    height: 50vh;
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: brightness(0.7);
    z-index: 0;
  }

  &__content {
    position: relative;
    display: flex;
    align-items: flex-end;
    height: 100%;
    color: #fff;
    padding-bottom: 40px;
    z-index: 1;

    @media screen and (max-width: 720px) {
      justify-content: center;
      align-items: center;
      padding-bottom: 0;
    }
  }

  &__title {
    max-width: 800px;
    font-size: 50px;
    text-transform: uppercase;

    @media screen and (max-width: 960px) {
      font-size: 40px;
    }

    @media screen and (max-width: 720px) {
      font-size: 25px;
    }
  }
}
</style>
