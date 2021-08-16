<template lang="pug">
  section.main-slider
    Hooper.main-slider__slider(:settings="settings" ref="slider")
      Slide.main-slider__slide(v-for="(image, index) in mainSlider.images" :key="index")
        ResponsibleImage(:img="image")
      Pagination(slot="hooper-addons")

    .main-slider__controls.container
      button.main-slider__control.main-slider__control_prev(@click="slidePrev")
      button.main-slider__control.main-slider__control_next(@click="slideNext")

    .main-slider__content
      h1.main-slider__title.title {{ mainSlider.title }}
</template>

<script>
import { Hooper, Slide, Pagination } from 'hooper'
import ResponsibleImage from '../global/ResponsibleImage.vue'
import { mainSlider } from '~/content/data'

export default {
  name: 'MainSlider',

  components: {
    Hooper,
    Slide,
    ResponsibleImage,
    Pagination
  },

  data () {
    return {
      mainSlider,

      settings: {
        wheelControl: false,
        infiniteScroll: true,
        mouseDrag: false,
        touchDrag: false,
        autoPlay: true,
        playSpeed: 10000,
        transition: 2000,
        hoverPause: false
      }
    }
  },

  methods: {
    slidePrev () {
      this.$refs.slider.slidePrev()
    },

    slideNext () {
      this.$refs.slider.slideNext()
    }
  }
}
</script>

<style lang="scss">
.main-slider {
  position: relative;
  height: 100vh;
  min-height: 400px;

  @media screen and (max-width: 720px) {
    height: 90vh;
  }

  &__slider {
    height: 100%;

    .hooper-track {
      filter: brightness(0.7);
    }

    .hooper-pagination {
      opacity: 0.9;
      padding-bottom: 20px;

      li {
        width: 20px;
      }
    }
  }

  &__controls {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    transform: translate(-50%, -50%);
  }

  &__control {
    font-size: 20px;
    background-color: transparent;
    border: none;
    width: 2em;
    height: 2em;
    border-top: 0.25em solid #fff;
    border-right: 0.25em solid #fff;
    cursor: pointer;
    opacity: 0.5;

    @media screen and (max-width: 960px) {
      font-size: 15px;
    }

    @media screen and (max-width: 720px) {
      display: none;
    }

    &:hover,
    &:focus {
      opacity: 1;
    }

    &_prev {
      transform: rotate(-135deg);
    }

    &_next {
      transform: rotate(45deg);
    }
  }

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
  }

  &__title {
    max-width: 14em;
    width: 100vw;

    @media screen and (max-width:720px) {
      padding: 0 20px;
    }
  }
}
</style>
