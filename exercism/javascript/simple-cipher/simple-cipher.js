const isAcceptable = (string) => /^[a-z]+$/.test(string)

const randomNumber = (max) => Math.floor(Math.random() * Math.floor(max))

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function Cipher (key) {
  if (!isAcceptable(key)) {
    throw new Error('Bad key');
  }
  this.key = key || soup(100);
};

const soup = (size) => {
  const alphabetArr = alphabet.split('');
  let arr = [];
  for (i=0; i < size; i++) {
    arr[i] = alphabetArr[randomNumber(alphabetArr.length)];
  }
  return arr.join('');
}

Cipher.prototype.encode = function (string) {
  while (this.key.length < string.length) {
    this.key += this.key
  }
  return string
            .split('')
            .map((character, index) => {
              let newIndex = alphabet.indexOf(character) + alphabet.indexOf(this.key[index]);
              if (newIndex >= alphabet.length) {
                newIndex -= alphabet.length;
              }
              return alphabet[newIndex];
            })
            .join('');
}

Cipher.prototype.decode = function (string) {
  return string
            .split('')
            .map((character,index) => {
		          let newIndex = alphabet.indexOf(character) - alphabet.indexOf(this.key[index]);
		          if (newIndex < 0) {
                newIndex += alphabet.length;
              }
              return alphabet[newIndex];
            })
	          .join('');
}

module.exports = Cipher;