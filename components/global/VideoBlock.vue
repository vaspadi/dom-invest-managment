<template>
  <div class="video">
    <component :is="component" :square="square" :video-id="videoId" :title="title" @click="watch = true" />
  </div>
</template>

<script>
import PreviewVideo from '~/components/atoms/video/PreviewVideo.vue'
import IframeVideo from '~/components/atoms/video/IframeVideo.vue'

export default {
  name: 'Video',

  components: {
    PreviewVideo,
    IframeVideo
  },

  props: {
    videoId: {
      type: String,
      required: true
    },

    title: {
      type: String,
      default: ''
    },

    square: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      watch: false
    }
  },

  computed: {
    component () {
      if (this.watch) {
        return IframeVideo
      } else {
        return PreviewVideo
      }
    }
  },

  watch: {
    videoId () {
      this.watch = false
    }
  }
}
</script>
