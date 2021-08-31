<template lang="pug">
  .slider-controls(:class="{ 'slider-controls_dark': dark }")
    button.slider-controls__button.slider-controls__button_prev(@click="$emit('prev')")
    button.slider-controls__button.slider-controls__button_next(@click="$emit('next')")
</template>

<script>
export default {
  name: 'SliderControls',

  props: {
    dark: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.slider-controls {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  transform: translate(-50%, -50%);

  &_dark {
    .slider-controls__button {
      border-color: #000;
    }
  }

  &__button {
    font-size: 20px;
    background-color: transparent;
    border: none;
    width: 2em;
    height: 2em;
    border-top: 0.25em solid #fff;
    border-right: 0.25em solid #fff;
    cursor: pointer;
    opacity: 0.5;

    @media screen and (max-width: 960px) {
      font-size: 15px;
    }

    @media screen and (max-width: 720px) {
      display: none;
    }

    &:hover,
    &:focus {
      opacity: 1;
    }

    &_prev {
      transform: rotate(-135deg);
    }

    &_next {
      transform: rotate(45deg);

    }
  }
}
</style>
