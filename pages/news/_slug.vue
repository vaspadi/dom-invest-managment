<template lang="pug">
  .article-page
    Banner.article-page__banner(:title="page.title")

    .container.article-page__container
      NuxtContent.article-page__nuxt-content(:document="page")
      PrevNext.article-page__prev-next(:prev="prev" :next="next")
</template>

<script>
import Banner from '~/components/atoms/Banner'
import PrevNext from '~/components/atoms/controls/PrevNext'

export default {
  components: {
    Banner,
    PrevNext
  },

  layout: 'no-banner',

  async asyncData ({ $content, params, error }) {
    const slug = params.slug || 'index'
    const page = await $content(`news/${slug}`)
      .sortBy('createdAt', 'asc')
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    const [prev, next] = await $content('news')
      .only(['title', 'slug'])
      .sortBy('createdAt')
      .surround(params.slug)
      .fetch()

    return {
      page,
      prev,
      next
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
