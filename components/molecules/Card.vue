<template lang="pug">
  .card
    NuxtLink.card__link(:to="data.dir + '/' + data.slug")
      .card__preview
        ResponsibleImage.card__image(:img="data.img")

      .card__content
        h3.card__title {{ data.title }}
        p.card__description {{ data.description }}
        ul.card__list(v-if="data.tags")
          li.card__item(v-for="(tag, index) in data.tags" :key="index")
            p.card__tag # {{ tag }}
</template>

<script>
import ResponsibleImage from '~/components/global/ResponsibleImage'

export default {
  name: 'Card',

  components: {
    ResponsibleImage
  },

  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/base/variables";

.card {
  border-radius: $--bd-radius;
  box-shadow: 0 0 10px rgb(0 0 0 / 9%);
  overflow: hidden;
  background-color: #fff;

  &:hover,
  &:focus {
    .card__image img {
      transform: scale(1.1);
    }
  }

  &__link {
    display: flex;
    flex-direction: column;
    height: 100%;
    color: #000;
    text-decoration: none;
  }

  &__preview {
    flex-shrink: 0;
    height: 250px;
    border-radius: $--bd-radius $--bd-radius 0 0;
    overflow: hidden;
  }

  &__image img {
    transition: all 0.3s ease;
  }

  &__content {
    display: flex;
    flex-direction: column;
    height: 100%;
    line-height: 1.1;
    padding: 20px 40px 5px;

    @media screen and (max-width: 720px) {
      padding-right: 20px;
      padding-left: 20px;
    }
  }

  &__title {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 15px;

    @media screen and (max-width: 540px) {
      font-size: 25px;
    }
  }

  &__description {
    font-size: 20px;
    color: #000;
    margin-bottom: 15px;

    @media screen and (max-width: 540px) {
      font-size: 18px;
    }
  }

  &__list {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    height: 100%;
    margin-bottom: 15px;
  }

  &__item {
    color: #3f77cc;
    text-transform: lowercase;
    margin-right: 10px;
  }
}
</style>
