<template lang="pug">
  header.header(:style="{ background: `rgba(0,0,0,${opacity})` }")
    .container.header__content
      Logo.header__logo(light)

      nav.header__nav
        ul.header__list
          li.header__item(v-for="(link, index) in links" :key="index")
            NuxtLink.header__link(exact-active-class="header__link_active" :to="link.url") {{ link.title }}
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
      eventHeight: 300,
      minOpacity: 0.2,
      opacity: this.minOpacity
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
      this.opacity = this.minOpacity + window.scrollY / this.eventHeight
    }
  }
}
</script>

<style lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: inherit;
    padding: 5px 20px;

    @media screen and (max-width: 960px) {
      justify-content: center;
    }

    @media screen and (max-width: 720px) {
      background-color: #000;
    }
  }

  &__logo {
    margin-right: 50px;

    @media screen and (max-width: 960px) {
      display: none !important;
    }
  }

  &__nav {
    overflow-x: scroll;
    overflow-y: hidden;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__list {
    display: flex;
  }

  &__link {
    display: inline-block;
    font-size: 20px;
    color: #fff;
    text-decoration: none;
    padding: 15px 10px;
    white-space: nowrap;

    @media screen and (max-width: 1140px) {
      font-size: 18px;
      padding: 10px 5px;
    }

    @media screen and (max-width: 720px) {
      font-size: 16px;
      padding: 5px;
    }

    &_active,
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
}
</style>
