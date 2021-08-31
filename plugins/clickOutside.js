import Vue from 'vue'

Vue.directive('click-outside', {
  bind: (el, { value: handler }) => {
    document.addEventListener('click', (event) => {
      const isClickOutside = event.target !== el && !el.contains(event.target)

      return isClickOutside ? handler(event, el) : null
    })
  }
})
