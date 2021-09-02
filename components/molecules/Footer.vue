<template lang="pug">
  footer.footer
    .container
      .footer__content
        .footer__row
          a.footer__phone(:href="`tel:+${phone.href}`") {{ phone.value }}
          Logo.footer__logo(light)

        nav.footer__nav
          ul.footer__list
            li.footer__item(v-for="(link, index) in links" :key="index")
              NuxtLink.footer__link(exact-active-class="footer__link_active" :to="link.url") {{ link.title }}

    Authors.footer__authors
</template>

<script>
import Logo from '~/components/atoms/Logo'
import Authors from '~/components/atoms/Authors'
import { phone } from '~/content/data'
import { links } from '~/content/links'

export default {
  name: 'Footer',

  components: {
    Logo,
    Authors
  },

  data () {
    return {
      phone,
      links
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/base/variables";

.footer {
  background-color: #000;

  &__content {
    padding: 70px 0 100px;

    @media screen and (max-width: 720px) {
      padding: 50px 0 80px;
    }
  }

  &__row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;

    @media screen and (max-width: 720px) {
      flex-direction: column-reverse;
      align-items: center;
      margin-bottom: 50px;
    }
  }

  &__phone {
    font-size: 40px;
    font-weight: 700;
    color: #fff;
    text-decoration: none;
  }

  &__logo {
    max-width: 250px;

    @media screen and (max-width: 720px){
      margin-bottom: 30px;
    }
  }

  &__list {
    display: flex;
    margin: 0 -10px;
    flex-wrap: wrap;

    @media screen and (max-width: 720px){
      justify-content: center;
    }
  }

  &__link {
    display: inline-block;
    font-size: 22px;
    color: #fff;
    text-decoration: none;
    padding: 5px 10px;

    &_active,
    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  &__authors {
    background-color: rgba(#fff, 0.02)
  }
}
</style>
