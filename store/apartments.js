const SET_APARTMENTS = 'SET_APARTMENTS'

export const state = () => ({
  apartments: []
})

export const mutations = {
  [SET_APARTMENTS] (state, apartments) {
    state.apartments = apartments
  }
}

export const actions = {
  async getApartments ({ commit }) {
    const apartments = await this.$apartmentsRepo.get()
    commit('SET_APARTMENTS', apartments)
  }
}
