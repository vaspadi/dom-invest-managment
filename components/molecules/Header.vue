<template lang="pug">
  header.header(:style="{ background: `rgba(0,0,0,${opacity})` }")
    HeaderTop.header__top
    .container.header__content
        Logo.header__logo(light)

        nav.header__nav
          ul.header__list
            li.header__item(v-for="(link, index) in links" :key="index")
              NuxtLink.header__link(exact-active-class="header__link_active" :to="link.url") {{ link.title }}

        a.header__phone(:href="`tel:+${phone.href}`") {{ phone.value }}
</template>

<script>
import Logo from '~/components/atoms/Logo.vue'
import HeaderTop from '~/components/atoms/HeaderTop'
import { links } from '~/content/links'
import { phone } from '~/content/data'

export default {
  name: 'Header',

  components: {
    HeaderTop,
    Logo
  },

  data () {
    return {
      links,
      phone,
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
  @media screen and (min-width: 1141px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }

  &__top {
    width: 100%;
    z-index: 10;

    @media screen and (min-width: 1141px) {
      display: none;
    }

    @media screen and (max-width: 1140px) {
      position: fixed;
      top: 0;
      left: 0;
      height: 50px;
    }
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: inherit;
    padding: 5px 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    z-index: 9;

    @media screen and (max-width: 1140px) {
      position: absolute;
      top: 50px;
      left: 0;
      justify-content: center;
      background-color: #000;
    }

    @media screen and (max-width: 720px) {
      background-color: #000;
    }
  }

  &__logo {
    margin-right: 30px;

    @media screen and (max-width: 1140px) {
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

  }

  &__phone {
    font-size: 22px;
    color: #fff;
    text-decoration: none;
    line-height: 1;
    white-space: nowrap;
    margin-left: 30px;

    @media screen and (max-width: 1140px) {
      display: none;
    }
  }
}
</style>
