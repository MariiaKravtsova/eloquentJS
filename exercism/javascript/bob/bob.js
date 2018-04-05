function Bob () {

}

function isUpper (string) {
  return string === string.toUpperCase() && /[A-Z]/.test(string)
}

Bob.prototype.hey = (phrase) => {
  const cleaned = phrase
                    .replace('\t', '')
                    .replace('\n', '')
                    .replace('\r', '')
                    .trim()

  if (cleaned.length === 0) return 'Fine. Be that way!'

  if (isUpper(cleaned)) return 'Whoa, chill out!'

  return cleaned.endsWith("?") ? 'Sure.' : 'Whatever.'
}

module.exports = Bob;