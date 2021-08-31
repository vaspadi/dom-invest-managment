const CHANGE_BANNER_BG = 'CHANGE_BANNER_BG'
const CHANGE_BANNER_TITLE = 'CHANGE_BANNER_TITLE'

export const state = () => ({
  title: '',
  image: 'main-slider/img7.jpg'
})

export const mutations = {
  [CHANGE_BANNER_BG] (state, image) {
    state.image = image
  },

  [CHANGE_BANNER_TITLE] (state, title) {
    state.title = title
  }
}

export const actions = {
  changeBannerBg ({ commit }, image) {
    commit(CHANGE_BANNER_BG, image)
  },

  changeBannerTitle ({ commit }, title) {
    commit(CHANGE_BANNER_TITLE, title)
  }
}
