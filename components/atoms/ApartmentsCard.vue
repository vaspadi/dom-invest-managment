<template lang="pug">
  .apartments-card
    .apartments-card__no-image
      icon.apartments-card__no-image-icon(icon="image")
    .apartments-card__content
      h3.apartments-card__title {{ floors[data.floorNum] || data.floorNum + ' комнатная' }} квартира {{data.apartmentArea}} м<sup>2</sup>
      p.apartments-card__subtitle Очередь {{ data.queueNum }}, Этаж {{ data.floorNum }}, комнаты {{ data.roomsNum }}
      p.apartments-card__tag Дата сдачи {{ data.deliveryDate || 'неопределена' }}
      p.apartments-card__price {{ data.cost }}
        icon.ruble(v-if="!isNaN(+data.cost) && data.cost" icon="ruble-sign")
        span(v-if="!isNaN(+data.cost) && data.cost" icon="ruble-sign") или {{data.cost / +data.apartmentArea.replace(/,/, '.') }}
          icon.ruble(v-if="!isNaN(+data.cost) && data.cost" icon="ruble-sign")
          |  за м<sup>2</sup>
</template>

<script>
export default {
  name: 'ApartmentsCard',

  props: {
    data: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      floors: {
        1: 'Однокомнатная',
        2: 'Двухкомнатная',
        3: 'Трехкомнатная',
        4: 'Четырехкомнатная',
        5: 'Пятикомнатная'
      }
    }
  }
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
    text-align: right;
    font-size: 25px;
    font-weight: 700;
    line-height: 1.2;
    text-transform: lowercase;

    .ruble {
      font-size: 0.8em;
      margin-left: 5px;
    }

    span {
      display: block;
      color: rgba(0,0,0,0.5);
      font-size: 0.55em;
    }
  }
}
</style>
