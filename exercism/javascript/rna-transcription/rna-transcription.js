function DnaTranscriber () {

}

DnaTranscriber.prototype.toRna = (dna) => {
  var rna = []
  dna.split('').map((letter) => {
    switch(letter){
      case 'C':
        rna.push('G')
        break
      case 'G':
        rna.push('C')
        break
      case 'A':
        rna.push('U')
        break
      case 'T':
        rna.push('A')
        break
      default:
        throw new Error('Invalid input')
    }
  })
  return rna.join('')
}

module.exports = DnaTranscriber