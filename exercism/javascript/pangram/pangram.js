function Pangram (string) {
  this.string = string
}

Pangram.prototype.isPangram = function () {
  if (this.string.length === 0) {
    return false;
  }
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let bool = true;
  const strippedArray = this.string
                  .toLowerCase()
                  .replace(/[0-9]/g, "")
                  .replace(/[^\w\s]|_/g, "")
                  .replace(/\s+/g, "")
                  .split('')
                  .sort()
  const set = [...new Set(strippedArray)]
  set.forEach((element, index) => {
    if(element !== alphabet[index]) {
      bool = false;
    }
  });
  return bool;
}

module.exports = Pangram