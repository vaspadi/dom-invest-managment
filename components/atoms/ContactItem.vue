<template lang="pug">
  .contact-item
    icon.contact-item__icon(:icon="[data.iconPack || 'fas', data.icon]")

    .contact-item__content
      h3.contact-item__title {{ data.title }}

      p.contact-item__description {{ data.description }}
</template>

<script>
export default {
  name: 'ContactItem',

  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.contact-item {
  display: flex;
  align-items: center;
  min-width: 250px;
  max-width: 450px;

  &__icon {
    font-size: 2.5em;
    margin-right: 20px;
  }

  &__content {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-size: 1.3em;
    margin-bottom: 10px;
  }

  &__description {
    font-size: 1.1em;
  }
}
</style>
