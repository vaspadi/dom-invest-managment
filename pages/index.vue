<template lang="pug">
  div.index-page
    MainSlider
</template>

<script>
import MainSlider from '~/components/molecules/MainSlider.vue'

export default {
  name: 'Index',

  components: {
    MainSlider
  }
}
</script>

<style lang="scss">
.index-page {
  padding-bottom: 100vh;
}
</style>
