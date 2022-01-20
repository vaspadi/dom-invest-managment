<template lang="pug">
  .contact-item
    icon.contact-item__icon(:icon="[data.iconPack || 'fas', data.icon]")

    .contact-item__content
      h3.contact-item__title {{ data.title }}

      a.contact-item__email.contact-item__link(v-if="data.email" :href="`mailto:${data.email}`") {{ data.description }}

      a.contact-item__phone.contact-item__link(v-else-if="data.phone" :href="`tel:${data.phone}`") {{ data.description }}

      p.contact-item__description(v-else) {{ data.description }}
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
  // min-width: 250px;
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

  &__link {
    font-size: 1.1em;
    color: black;
  }

  &__description {
    font-size: 1.1em;
  }
}
</style>
