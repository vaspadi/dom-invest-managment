<template lang="pug">
  section.main-slider
    Hooper.main-slider__slider(:settings="settings" ref="slider")
      Slide.main-slider__slide(v-for="(image, index) in mainSlider.images" :key="index")
        ResponsibleImage(:img="image")
      Pagination(slot="hooper-addons")

    SliderControls.container(@prev="slidePrev" @next="slideNext")

    .main-slider__content
      h1.main-slider__title.title {{ mainSlider.title }}
</template>

<script>
import { Hooper, Slide, Pagination } from 'hooper'
import ResponsibleImage from '../global/ResponsibleImage.vue'
import SliderControls from '~/components/atoms/controls/SliderControls'
import { mainSlider } from '~/content/data'

export default {
  name: 'MainSlider',

  components: {
    Hooper,
    Slide,
    Pagination,
    ResponsibleImage,
    SliderControls
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
  overflow: hidden;

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

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    color: #fff;
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
