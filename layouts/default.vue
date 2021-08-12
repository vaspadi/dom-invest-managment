<template>
  <div class="default-layout">
    <Header />
    <Nuxt />
  </div>
</template>

<script>
import Header from '~/components/molecules/Header'

export default {
  name: 'Default',

  components: {
    Header
  }
}
</script>
