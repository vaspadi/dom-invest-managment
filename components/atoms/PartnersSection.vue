<template lang="pug">
  .partners-section
    h2.partners-section__title.title Наши друзья и партнёры

    ul.partners-section__list
      li.partners-section__item(v-for="(item, index) in list" :key="index")
        ResponsibleImage.responsible-image_contain(:img="item")

</template>

<script>
import ResponsibleImage from '~/components/global/ResponsibleImage'

export default {
  name: 'PartnersSection',

  components: {
    ResponsibleImage
  },

  props: {
    list: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.partners-section {
  &__title {
    margin-bottom: 50px;
  }

  &__list {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 -20px;

    @media screen and (max-width: 540px) {
      justify-content: space-around;
    }
  }

  &__item {
    max-width: 200px;
    margin: 10px 20px;
  }
}
</style>
