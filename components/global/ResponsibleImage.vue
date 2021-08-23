<template>
  <picture class="responsible-image">
    <source type="image/jpeg" :srcset="require(`~/assets/img/${ img }?resize`).srcSet">
    <source type="image/webp" :srcset="require(`~/assets/img/${ img }?resize&format=webp`).srcSet">
    <img class="responsible-image__image" :src="require(`~/assets/img/${ img }?resize`).src" :alt="alt">
  </picture>
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
  }
}
</script>

<style lang="scss">
.responsible-image {
  height: 100%;
  min-height: inherit;

  &_contain {
    .responsible-image__image {
      object-fit: contain;
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    min-height: inherit;
    object-fit: cover;
    border-radius: inherit;
  }
}
</style>
