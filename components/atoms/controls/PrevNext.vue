<template>
  <div class="prev-next">
    <NuxtLink v-if="prev" class="prev-next__link prev-next__link_left" :to="prev.path">
      <icon icon="long-arrow-alt-left" />
      <span class="prev-next__text">
        {{ prev.title }}
      </span>
    </NuxtLink>

    <span v-else>&nbsp;</span>

    <NuxtLink v-if="next" class="prev-next__link prev-next__link_right" :to="next.path">
      <span class="prev-next__text">
        {{ next.title }}
      </span>
      <icon icon="long-arrow-alt-right" />
    </NuxtLink>

    <span v-else>&nbsp;</span>
  </div>
</template>

<script>
export default {
  name: 'PrevNext',

  props: {
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

.prev-next {
  display: flex;
  justify-content: space-between;
  padding: 0 40px;

  &__link {
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    color: #000;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  &__text {
    margin: 0 5px;
  }
}
</style>
