<template lang="pug">
  header.header(:class="{'header_active': active}")
    .container.header__content
      Logo(:light="!active")

      nav
        ul.header__list
          li.header__item(v-for="(link, index) in links" :key="index")
            NuxtLink.header__link(:to="link.url") {{ link.title }}
</template>

<script>
import Logo from '~/components/atoms/Logo.vue'
import { links } from '~/content/links'

export default {
  name: 'Header',

  components: {
    Logo
  },

  data () {
    return {
      links,
      active: false
    }
  },

  mounted () {
    if (process.browser) {
      this.onScroll()
      window.addEventListener('scroll', this.onScroll)
    }
  },

  destroyed () {
    if (process.browser) {
      window.removeEventListener('scroll', this.onScroll)
    }
  },

  methods: {
    onScroll () {
      window.scrollY >= 40 && process.browser ? this.active = true : this.active = false
    }
  }
}
</script>

<style lang="scss">
.header {
  position: absolute;
  top: 40px;
  left: 0;
  width: 100%;
  height: 70px;
  z-index: 10;

  &_active {
    position: fixed;
    top: 0;
    background-color: #fff;
    transition: background-color 0.3s;

    .header__link {
      color: #000;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 40px;
  }

  &__list {
    display: flex;
  }

  &__link {
    font-size: 20px;
    color: #fff;
    text-decoration: none;
    padding: 10px;

    &:hover,
    &:focus {
      color: #3f77cc;
      text-decoration: underline;
    }
  }
}
</style>
