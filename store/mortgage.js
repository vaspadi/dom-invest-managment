const CHANGE_PAYMENT = 'CHANGE_PAYMENT'
const CHANGE_PERIOD = 'CHANGE_PERIOD'

export const state = () => ({
  rate: 8.2,
  mortgage: 3000000,
  payment: 0,
  period: 10
})

export const mutations = {
  [CHANGE_PAYMENT] (state, num) {
    state.payment = num
  },

  [CHANGE_PERIOD] (state, num) {
    state.period = num
  }
}

export const actions = {
  changePayment ({ commit }, num) {
    commit(CHANGE_PAYMENT, num)
  },

  changePeriod ({ commit }, num) {
    commit(CHANGE_PERIOD, num)
  }
}

export const getters = {
  monthSum: (state) => {
    const firstAction = (state.mortgage - state.payment) * (state.rate / 12)
    const secondAction = 1 - (1 + state.rate / 12) * (1 - state.period * 12)
    return firstAction / secondAction
  }
}
