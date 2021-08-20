<template lang="pug">
  section.objects-section.section
    .container
      CardList.objects-section__list(:data="objects" small)
      SectionHeader(:data="objectsSection")
</template>

<script>
import CardList from '~/components/molecules/CardList'
import SectionHeader from '~/components/atoms/SectionHeader'
import { objectsSection } from '~/content/data'

export default {
  name: 'ObjectsSection',

  components: {
    CardList,
    SectionHeader
  },
  data () {
    return {
      objects: [],
      objectsSection
    }
  },

  async fetch () {
    this.objects = await this.$content('news', { deep: true }).limit(6).fetch()
  }
}
</script>

<style lang="scss">
.objects-section {
  &__list {
    @media screen and (max-width: 720px) {
      .cards-section__item:nth-child(n + 4) {
        display: none;
      }
    }
  }
}
</style>
