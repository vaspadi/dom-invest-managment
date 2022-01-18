<template>
  <div class="no-banner-layout">
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/molecules/Footer'

import Header from '~/components/molecules/Header'

export default {
  name: 'NoBanner',

  components: {
    Header,
    Footer
  }
}
</script>
