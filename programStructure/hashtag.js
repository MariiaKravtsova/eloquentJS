function simpleHashtag(size) {
  let str = ''
  for (i = 0; i < size; i++) {
    str = str + '#'
    console.log(str)
  }
}

function backwardsHashtag(size) {
  let str = ''
  for (i = 0; i < size; i++) {
    str = ' '.repeat(size - i) + '#'.repeat(i)
    console.log(str)
  }
}

backwardsHashtag(8)
