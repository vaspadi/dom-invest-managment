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

  props: {
    limit: {
      type: Number,
      default: 6
    },

    indexPage: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      objects: [],
      objectsSection
    }
  },

  async fetch () {
    // indexPage влияет на отображение объектов на главной странице
    this.objects = await this.$content('objects', { deep: true })
      .where(this.indexPage ? { indexPage: true, project: false } : null)
      .limit(this.limit)
      .without('body')
      .sortBy('createdAt')
      .fetch()
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
