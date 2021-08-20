import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
  apiKey: 'b1ca462e-0ff0-47eb-bbd7-5c3ecb1965b9',
  lang: 'ru_RU',
  coordorder: 'latlong'
}

Vue.use(YmapPlugin, settings)
