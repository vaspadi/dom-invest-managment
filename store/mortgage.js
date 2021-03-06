const CHANGE_PAYMENT = 'CHANGE_PAYMENT'
const CHANGE_PERIOD = 'CHANGE_PERIOD'
const CHANGE_MORTGAGE = 'CHANGE_MORTGAGE'

export const state = () => ({
  rate: {
    sber: 7.7,
    sankt: 8.7,
    vtb: 8.2
  },
  mortgage: 3000000,
  payment: 300000,
  period: 10
})

export const mutations = {
  [CHANGE_MORTGAGE] (state, num) {
    if (state.payment > num * 0.9) { state.payment = Math.round(num * 0.9) }
    state.mortgage = +num
  },

  [CHANGE_PAYMENT] (state, num) {
    state.payment = +num
  },

  [CHANGE_PERIOD] (state, num) {
    state.period = +num
  }
}

export const actions = {
  changePayment ({ commit }, num) {
    commit(CHANGE_PAYMENT, num)
  },

  changePeriod ({ commit }, num) {
    commit(CHANGE_PERIOD, num)
  },

  changeMortgage ({ commit }, num) {
    commit(CHANGE_MORTGAGE, num)
  }
}

export const getters = {
  monthSum: (state) => {
    const objSum = {}

    Object.keys(state.rate).forEach((key) => {
      const firstAction = (state.mortgage - state.payment) * (state.rate[key] / 12)
      const secondAction = 1 - (1 + state.rate[key] / 12) * (1 - state.period * 12)

      objSum[key] = Math.round(firstAction / secondAction)
    })

    return objSum
  }
}
