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
    //position: relative;
    text-transform: uppercase;
    text-decoration: none;

    color: #000;
    font-weight: 700;

    &:hover,
    &:focus {
      text-decoration: underline;
    }

    //&_left {
    //  &:hover,
    //  &:focus {
    //    left: -10px;
    //    //color: $--active;
    //
    //    //&::selection {
    //      //background-color: $--dark;
    //    //}
    //  }
    //}
    //
    //&_right {
    //  &:hover,
    //  &:focus {
    //    right: -10px;
    //    //color: $--active;
    //  }
    //}
  }

  &__text {
    margin: 0 5px;

    //&::selection {
      //color: $--light;
    //}
  }

}
</style>
