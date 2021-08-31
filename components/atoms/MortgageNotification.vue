<template lang="pug">
  .mortgage-notification
    img.mortgage-notification__image(src="~assets/img/bullseys.svg")
    p.mortgage-notification__text 98% заявок, поданных с этой страницы, получают одобрение
</template>

<script>
export default {
  name: 'MortgageNotification'
}
</script>

<style lang="scss">
@import "assets/scss/base/variables";
.mortgage-notification {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $--light-block-bg;
  padding: 20px;
  border-radius: $--bd-radius;

  &__image {
    width: 50px;
    margin-right: 15px;
  }

  &__text {
    max-width: 300px;
    font-size: 20px;
    line-height: 1;
  }
}
</style>
