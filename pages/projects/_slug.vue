<template lang="pug">
  ArticlePage(:article="article" :prev="prev" :next="next")
</template>

<script>
const ArticlePage = () => import('~/components/molecules/ArticlePage')

export default {
  name: 'ProjectsSlug',

  components: {
    ArticlePage
  },

  layout: 'no-banner',

  async asyncData ({ $content, params, error }) {
    const slug = params.slug || 'index'
    const article = await $content(`news/${slug}`)
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
      article,
      prev,
      next
    }
  },

  head () {
    return {
      title: this.article.metaTitle || '',
      meta: [
        { hid: 'description', name: 'description', content: this.article.metaDescription || this.article.description || '' }
      ]
    }
  }
}
</script>
