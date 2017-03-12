const TAX_RATE = 0.06

function calculateFinalCost(amount) {
  amount = amount + (amount * TAX_RATE)
  return amount
}

var amount = 13.99

amount = calculateFinalCost(amount)
console.log(amount.toFixed(2))
