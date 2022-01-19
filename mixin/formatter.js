
const methods = {
  smartRound (num, afterPointNum = 2) {
    return num.toLocaleString('fi-FI', {
      minimumFractionDigits: 0,
      maximumFractionDigits: afterPointNum
    })
  }
}

export default {
  methods
}
