<template lang="pug">
  .header-top
    .container.header-top__content
      Logo.header-top__logo(light)
      a.header-top__phone(:href="`tel:+${phone.href}`") {{ phone.value }}
</template>

<script>
import Logo from '~/components/atoms/Logo.vue'
import { phone } from '~/content/data'

export default {
  name: 'HeaderTop',

  components: {
    Logo
  },

  data () {
    return {
      phone
    }
  }
}
</script>

<style lang="scss">
.header-top {
  background-color: #000;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 10px 50px;

  }

  &__logo {
    img {
      max-height: 30px;

      @media screen and (max-width: 720px) {
        max-height: 25px;
      }
    }
  }

  &__phone {
    font-size: 22px;
    color: #fff;
    text-decoration: none;
    white-space: nowrap;

    @media screen and (max-width: 720px) {
      font-size: 18px;
    }
  }
}
</style>
