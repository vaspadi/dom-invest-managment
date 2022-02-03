<template>
  <picture v-if="checkLink()" class="responsible-image">
    <source type="image/webp" :srcset="require(`~/assets/img/${ getRelativeSrc() }?resize&format=webp`)">
    <img class="responsible-image__image" :src="require(`~/assets/img/${ getRelativeSrc() }?resize`)" :alt="alt">
  </picture>

  <img v-else :src="img" :alt="alt">
</template>

<script>
export default {
  name: 'ResponsibleImage',

  props: {
    img: {
      type: String,
      required: true
    },

    alt: {
      type: String,
      default: ''
    }
  },

  methods: {
    getRelativeSrc () {
      // Из админки приходит не относительный путь, а /assets/img/...
      return this.img ? this.img.replace(/\/assets\/img\//, '') : ''
    },

    checkLink () {
      return !(/^http/).test(this.img)
    }
  }
}
</script>

<style lang="scss">
.responsible-image {
  height: 100%;
  width: 100%;
  min-height: inherit;

  &__image {
    width: 100%;
    height: 100%;
    min-height: inherit;
    object-fit: cover;
  }
}
</style>
