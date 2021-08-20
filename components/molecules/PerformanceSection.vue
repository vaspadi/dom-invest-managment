<template lang="pug">
  section.performance-section.section
    .container
      .performance-section__content
        TextBlock.performance-section__text-block(:data="data.list" dark)

        .performance-section__image-wrap
          ResponsibleImage.performance-section__image(:img="data.img")

      SectionHeader(:data="data.header" light)
</template>

<script>
import TextBlock from '~/components/atoms/TextBlock'
import ResponsibleImage from '~/components/global/ResponsibleImage'
import SectionHeader from '~/components/atoms/SectionHeader'
import { perfomanceSection } from '~/content/data'

export default {
  name: 'PerformanceSection',

  components: {
    TextBlock,
    ResponsibleImage,
    SectionHeader
  },

  data () {
    return {
      data: perfomanceSection
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/base/variables";

.performance-section {
  background-color: $--dark-bg;
  color: #fff;

  &__content {
    display: flex;
    min-height: 250px;
    margin-bottom: 40px;
  }

  &__text-block {
    width: 50%;
    margin-right: 20px;
  }

  &__image-wrap {
    width: 50%;
    position: relative;
    min-height: 100%;
    margin-left: 20px;
  }

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: $--bd-radius;
  }
}
</style>
