const SET_APARTMENTS = 'SET_APARTMENTS'
const SET_FILTER = 'SET_FILTER'

export const state = () => ({
  apartments: [],
  filters: {}
})

export const mutations = {
  [SET_APARTMENTS] (state, apartments) {
    state.apartments = apartments
  },

  [SET_FILTER] (state, { value, filter }) {
    state.filters[filter] = value
  }
}

export const actions = {
  async getApartments ({ commit }) {
    const apartments = await this.$apartmentsRepo.get()
    commit('SET_APARTMENTS', apartments)
  },

  changeFilter ({ commit, state }, { value, filter }) {
    if (state.filters[filter] !== value || Array.isArray(value)) {
      commit('SET_FILTER', { value, filter })
    }
  }
}
