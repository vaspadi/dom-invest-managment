<template lang="pug">
  .apartments-card
    .apartments-card__no-image
      icon.apartments-card__no-image-icon(icon="image")
    .apartments-card__content
      h3.apartments-card__title Трехкомнатная квартира 64 м<sup>2</sup>
      p.apartments-card__subtitle Очередь 1, Этаж 2, комнаты 2
      p.apartments-card__tag Дата сдачи 29 декобря 2020
      p.apartments-card__price 6000000
        icon.ruble(icon="ruble-sign")
</template>

<script>
export default {
  name: 'ApartmentsCard'
}
</script>

<style lang="scss">
@import "assets/scss/base/variables";

.apartments-card {
  display: flex;
  background-color: $--light-block-bg;
  padding: 20px 40px;
  border-radius: $--bd-radius;

  &__no-image {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 80px;
    color: $--light-block-bg;
    background-color: #fff;
    padding: 15px;
    border-radius: $--bd-radius;
    margin-right: 20px;
  }

  &__content {
    position: relative;
    width: 100%;
  }

  &__title {
    font-size: 20px;
  }

  &__subtitle {
    text-transform: lowercase;
    margin-bottom: 10px;
  }

  &__tag {
    display: inline-block;
    text-transform: lowercase;
    background-color: darken($--light-block-bg, 10%);
    padding: 2px 10px;
    border-radius: $--bd-radius;
  }

  &__price {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 25px;
    font-weight: 700;

    .ruble {
      font-size: 0.8em;
      margin-left: 5px;
    }
  }
}
</style>
