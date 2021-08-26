<template>
  <div class="default-layout">
    <Header />
    <Banner :img="img" :title="title" />
    <Nuxt />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '~/components/molecules/Header'
import Banner from '~/components/atoms/Banner'

export default {
  name: 'Default',

  components: {
    Header,
    Banner
  },

  computed: {
    ...mapState('banner', {
      title: 'title',
      img: 'image'
    })
  }
}
</script>
