<template lang="pug">
  section.information-section.section(:class="{ 'information-section_reverse': reverse }")
    .container
      .information-section__content
        TextBlock.information-section__text-block(:data="data.list" dark)

        .information-section__image.image-block
          ResponsibleImage.image-block__image(:img="data.img")

      SectionHeader(:data="data.header" light)
</template>

<script>
import TextBlock from '~/components/atoms/TextBlock'
import ResponsibleImage from '~/components/global/ResponsibleImage'
import SectionHeader from '~/components/atoms/SectionHeader'

export default {
  name: 'InformationSection',

  components: {
    TextBlock,
    ResponsibleImage,
    SectionHeader
  },

  props: {
    data: {
      type: Object,
      required: true
    },

    reverse: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/base/variables";

.information-section {
  background-color: $--dark-bg;
  color: #fff;

  &_reverse {
    @media screen and (min-width: 961px) {
      .information-section__text-block {
        margin-left: 20px;
        order: 2
      }

      .information-section__image {
        margin-right: 20px;
        order: 1;
      }
    }
  }

  &__content {
    display: flex;
    min-height: 250px;
    margin-bottom: 20px;

    @media screen and (max-width: 960px) {
      flex-wrap: wrap;
    }

    @media screen and (max-width: 720px) {
      margin-bottom: 10px;
    }
  }

  &__text-block {
    margin-right: 20px;

  }

  &__image {
    margin-left: 20px;
  }

  &__text-block,
  &__image {
    width: 50%;
    margin-bottom: 20px;

    @media screen and (max-width: 960px) {
      width: 100%;
      margin-right: 0;
      margin-left: 0;
    }
  }
}
</style>
