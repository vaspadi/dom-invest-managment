<template lang="pug">
  article.article-page
    Banner.article-page__banner(:title="article.title" :img='article.img')

    .container.article-page__container
      NuxtContent.article-page__nuxt-content(:document="article")
      PrevNext.article-page__prev-next(:prev="prev" :next="next")
</template>

<script>
const Banner = () => import('~/components/atoms/Banner')
const PrevNext = () => import('~/components/atoms/controls/PrevNext')

export default {
  name: 'ArticlePage',

  components: {
    Banner,
    PrevNext
  },

  props: {
    article: {
      type: Object,
      required: true
    },

    prev: {
      type: Object,
      default: () => null
    },

    next: {
      type: Object,
      default: () => null
    }
  }
}
</script>

<style lang="scss">
.article-page {
  font-size: 20px;

  &__banner .banner__content {
    max-width: 960px;
  }

  &__container {
    max-width: 960px;
    padding: 80px 20px 100px;
  }

  &__nuxt-content {
    .responsible-image,
    .video {
      display: inline-block;
      margin: 20px 0;
    }
  }

  &__prev-next {
    margin-top: 60px;
  }
}
</style>
