<template>
  <div :class="['preview-video', { 'preview-video_square': square }]" @click="$emit('click')">
    <h3 class="preview-video__title">
      {{ title }}
    </h3>
    <img class="preview-video__img" :src="`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`" :alt="title">

    <button class="preview-video__button">
      <icon class="preview-video__icon" :icon="['fab', 'youtube']" />
    </button>
  </div>
</template>

<script>
export default {
  name: 'PreviewVideo',

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
  }

}
</script>

<style lang="scss">
.preview-video {
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  overflow: hidden;

  &_square {
    height: 0;
    padding-top: 100%;

    .preview-video__img {
      position: absolute;
      top: 0;
      left: 0;
    }
  }

  &:hover {
    .preview-video__button {
      color: #f00
    }
  }

  &__title {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 88%;
    font-size: 20px;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    z-index: 1;
  }

  &__img {
    height: 100%;
    width: 100%;
    min-height: inherit;
    object-fit: cover;
  }

  &__button {
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 70px;
    color: #212121;
    background-color: transparent;
    border: none;
    transform: translate(-50%, -50%);
    cursor: pointer;

    &:focus {
      .preview-video__button {
        color: #f00
      }
    }
  }
}
</style>
