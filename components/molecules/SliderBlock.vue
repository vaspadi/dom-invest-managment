<template lang="pug">
  .video-slider
    Hooper.video-slider__slider(:settings="settings" ref="videoSlider")
      Slide.video-slider__slide(v-for="(item, index) in data" :key="index")
        Card.video-slider__card(v-if="cards" :data="item")
        VideoBlock.video-slider__video(v-else :video-id="item.id" :title="item.title")

    SliderControls(@prev="slidePrev" @next="slideNext" dark)
</template>

<script>
import { Hooper, Slide } from 'hooper'
import VideoBlock from '~/components/global/VideoBlock'
import Card from '~/components/molecules/Card'
import SliderControls from '~/components/atoms/controls/SliderControls'

export default {
  name: 'VideoSlider',

  components: {
    Hooper,
    Slide,
    VideoBlock,
    Card,
    SliderControls
  },

  props: {
    cards: {
      type: Boolean,
      default: false
    },

    data: {
      type: Array,
      required: true
    }
  },

  data () {
    return {
      settings: {
        itemsToShow: 2,
        itemsToSlide: 2,
        wheelControl: false,
        mouseDrag: false,
        touchDrag: false,
        shortDrag: false,
        autoPlay: true,
        playSpeed: 10000,
        transition: 2000
      }
    }
  },

  methods: {
    slidePrev () {
      this.$refs.videoSlider.slidePrev()
    },

    slideNext () {
      this.$refs.videoSlider.slideNext()
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/base/variables";

.video-slider {
  position: relative;
  padding: 0 50px;

  &__slider {
    height: auto;
    z-index: 2;

    .hooper-track {
      align-items: stretch;
      transition: all 2000ms ease 0s;
    }
  }

  &__slide {
    height: auto;
    padding: 0 20px 10px;
  }

  &__video {
    border-radius: $--bd-radius;
  }

  &__card {
    height: 100%;
  }
}
</style>
