<template>
  <div class="logo">
    <img class="logo__img" :src="require(`~/assets/img/${ light ? logo.light : logo.color }`)" alt="Logo">
  </div>
</template>

<script>
export default {
  name: 'Logo',

  props: {
    light: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      logo: {
        color: 'logo/logo-2-color.png',
        light: 'logo/logo-2-light.png'
      }
    }
  }
}
</script>

<style lang="scss">
.logo {
  display: flex;
  align-items: center;
  max-width: 200px;

  &__img {
    width: 100%;
  }
}
</style>
