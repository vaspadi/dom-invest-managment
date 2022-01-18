<template>
  <div class="default-layout">
    <Header />
    <Banner :img="img" :title="title" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Header from '~/components/molecules/Header'
import Banner from '~/components/atoms/Banner'
import Footer from '~/components/molecules/Footer'

export default {
  name: 'Default',

  components: {
    Header,
    Banner,
    Footer
  },

  computed: {
    ...mapState('banner', {
      title: 'title',
      img: 'image'
    })
  }
}
</script>
