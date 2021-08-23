<template lang="pug">
  article.article-section
    h2.article-section__title.title {{ data.title }}
    p.article-section__paragraph(v-for="(item, index) in data.paragraphs" :key="index") {{ item }}

    ul.article-section__list.list.list_light(v-if="data.list")
      li.article-section__item(v-for="(item, index) in data.list" :key="index") {{ item }}
</template>

<script>
export default {
  name: 'ArticleSection',

  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.article-section {
  font-size: 28px;

  @media screen and (max-width: 960px) {
    font-size: 22px;
  }

  &__title {
    margin-bottom: 40px;
  }

  &__paragraph {
    line-height: 1.1;
    margin-bottom: 25px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &__list {
    display: flex;
    flex-flow: column wrap;
    max-height: 240px;
    margin-top: 80px;
    margin-right: -30px;

    @media screen and (max-width: 1140px) {
      max-height: 300px;
    }

    @media screen and (max-width: 720px) {
      max-height: 100%;
    }
  }

  &__item {
    width: 100%;
    max-width: 33%;
    padding-right: 30px;

    @media screen and (max-width: 1140px) {
      max-width: 50%;
    }

    @media screen and (max-width: 720px) {
      max-width: 100%;
    }
  }
}
</style>
