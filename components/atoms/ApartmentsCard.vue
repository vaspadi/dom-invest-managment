<template lang="pug">
  .apartments-card
    .apartments-card__no-image
      icon.apartments-card__no-image-icon(icon="image")
    .apartments-card__content
      h3.apartments-card__title {{ floors[data.floorNum] || data.floorNum + ' комнатная' }} квартира <span>{{data.apartmentArea}} м<sup>2</sup></span>
      div.apartments-card__description
        p.apartments-card__subtitle Очередь {{ data.queueNum }}, Этаж {{ data.floorNum }}, комнаты {{ data.roomsNum }}
        p.apartments-card__tag Дата сдачи {{ data.deliveryDate || 'неопределена' }}
      p.apartments-card__price {{ price() }}
        icon.ruble(v-if="isCost" icon="ruble-sign")
        span(v-if="isCost" icon="ruble-sign") или {{ areaPrice() }}
          icon.ruble(v-if="isCost" icon="ruble-sign")
          |  за м<sup>2</sup>
</template>

<script>
import formatter from '~/mixin/formatter'

export default {
  name: 'ApartmentsCard',

  mixins: [formatter],

  props: {
    data: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      isCost: !isNaN(+this.data.cost) && +this.data.cost !== 0,
      floors: {
        1: 'Однокомнатная',
        2: 'Двухкомнатная',
        3: 'Трехкомнатная',
        4: 'Четырехкомнатная',
        5: 'Пятикомнатная'
      }
    }
  },

  methods: {
    price () {
      const price = +this.data.cost

      if (isNaN(price)) { return 'Продано' }
      if (price <= 0) { return '' }

      return this.smartRound(price)
    },
    areaPrice () {
      const area = +this.data.apartmentArea.replace(/,/, '.')

      return this.smartRound(this.data.cost / area)
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/base/variables";

.apartments-card {
  display: flex;
  background-color: $--light-block-bg;
  border-radius: $--bd-radius;
  overflow: hidden;

  @media screen and (max-width: 720px) {
    flex-direction: column;
  }

  &__no-image {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 150px;
    font-size: 80px;
    color: $--light-block-bg;
    background-color: #fff;
    padding: 15px;

    @media screen and (max-width: 720px) {
      min-height: 150px;
      max-height: 150px;
    }
  }

  &__content {
    position: relative;
    width: 100%;
    padding: 20px 30px 30px;

    @media screen and (max-width: 720px) {
      display: flex;
      flex-direction: column;
      align-items: start;
      padding: 20px;
    }
  }

  &__title {
    font-size: 20px;
    padding-right: 150px;

    @media screen and (max-width: 720px) {
      padding-right: 0;
      margin-bottom: 10px;
    }

    span {
      white-space: nowrap;
    }
  }

  &__description {
    @media screen and (max-width: 720px) {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: 20px;
    }
  }

  &__subtitle {
    text-transform: lowercase;
    margin-bottom: 10px;

    @media screen and (max-width: 720px) {
      order: 1;
    }
  }

  &__tag {
    display: inline-block;
    text-transform: lowercase;
    white-space: nowrap;
    background-color: darken($--light-block-bg, 10%);
    padding: 2px 10px;
    border-radius: $--bd-radius;

    @media screen and (max-width: 720px) {
      order: 0;
      margin-right: 20px;
      margin-bottom: 10px;
    }
  }

  &__price {
    position: absolute;
    top: 20px;
    right: 30px;
    text-align: right;
    font-size: 25px;
    font-weight: 700;
    line-height: 1.2;
    text-transform: lowercase;

    @media screen and (max-width: 720px) {
      position: static;
      text-align: left;
    }

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
