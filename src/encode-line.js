const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1
  let res = ''

  for(let i = 1; i < str.length; i++){
    if(str[i] === str[i-1]){
      count++
    }else {
      res += numPlusLetter(str[i-1], count)
      count = 1
    }
  }
  
  if(str.length){
    res += numPlusLetter(str[str.length - 1], count)
  }
  return res
}

function numPlusLetter(sym, count) {
 return (count > 1 ? count : '') + sym
}

module.exports = {
  encodeLine
};
