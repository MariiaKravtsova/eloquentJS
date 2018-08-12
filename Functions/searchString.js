class SearchString {

  /**
   * Parses string into search string format.
   * @param {string} str
   Object.keys(obj)
   */
  parse(str) {
    const terms = {}
    let lastTerm = ''
    str.trim().split(' ').forEach(term => {
      const item = term.split(':')
      const [searchTerm, searchValue] = item
      if (item.length === 1) {
        console.log(lastTerm)
        terms[lastTerm].push(item[0])
      }
      if (terms[searchTerm]) {
        lastTerm = searchTerm
        terms[searchTerm].push(searchValue)
      } else {
        lastTerm = searchTerm
        terms[searchTerm] = [searchValue]
      }
    })
    this.str = terms;
  }

  /**
   * Returns all values matching given field.
   * @param {string} field - field for which we are requesting values.
   * @returns {string[]} - array of values.
   */
   getValues(field) {
     if (this.str[field]) {
      return this.str[field]
     } else {
       return []
     }
  }
}

console.log('--- RESULTS ---');
const searchString = new SearchString();
searchString.parse('to:foo@foo.com, trey@foo.com bcc:bar@foo.com');
console.log(searchString.getValues('to'));
