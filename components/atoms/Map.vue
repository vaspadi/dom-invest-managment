<template lang="pug">
  .map
    yandex-map.map__map(:controls="['zoomControl']" :scroll-zoom="false" :coords="coords" :zoom="zoom")
      ymap-marker(:coords="coords" marker-id="marker")
</template>

<script>
export default {
  name: 'Map',

  props: {
    coords: {
      type: Array,
      required: true
    },

    zoom: {
      type: Number,
      default: 11
    }
  }
}
</script>

<style lang="scss">
.map {
  &__map {
    height: 500px;
  }
}
</style>
