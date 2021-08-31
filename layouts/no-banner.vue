<template>
  <div class="no-banner-layout">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '~/components/molecules/Header'

export default {
  name: 'NoBanner',

  components: {
    Header
  }
}
</script>
