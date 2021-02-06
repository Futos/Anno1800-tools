export const ratioCalculator = (input1, input2) => {
  return input1 / input2
}

export const ratioCalculatorReverse = (input1, input2) => {
  return input2 / input1
}

export const roundUp = function (val) {
  return Math.ceil(val)
}

export default {
  ratioCalculator,
  ratioCalculatorReverse,
  roundUp
}
