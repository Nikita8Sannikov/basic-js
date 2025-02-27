const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let a = []
  let arr = String(n).split('')
  for(let i = 0; i< arr.length; i++){
    let rest = [...arr.slice(0,i), ...arr.slice(i+1)]
    a.push(Number(rest.join('')))
  }
  return getMaxOfArray(a)
}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
module.exports = {
  deleteDigit
};
