<template>
  <div :class="['iframe-video', { 'iframe-video_square': square }]">
    <iframe class="iframe-video__iframe" :src="`https://www.youtube-nocookie.com/embed/${videoId}?&autoplay=1`" frameborder="0" autoplay />
  </div>
</template>

<script>
export default {
  name: 'IframeVideo',

  props: {
    videoId: {
      type: String,
      required: true
    },

    square: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.iframe-video {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  background-color: #000;

  &_square {
    padding-bottom: 100%;
  }

  @media screen and (min-width: 961px) {
    height: 100%;
  }

  &__iframe {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
}
</style>
