const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) throw new Error(`'arr' parameter must be an instance of the Array!`);
  if (arr.length === 0) return [];
  let result = [...arr];

  for (let i = 0; i < result.length; i++) {
    if (result[i] === '--discard-next') {
      if (i + 1 < result.length) {
        result[i + 1] = null
      }
      result[i] = null;
    }
    if (result[i] === '--discard-prev') {
      if (i > 0 && result[i - 1] !== null) {
        result[i - 1] = null
      }
      result[i] = null;
    }
    if (result[i] === '--double-next') {
      if (i + 1 < result.length) {
        result[i] = result[i + 1]
      } else {
        result[i] = null
      }
    }
    if (result[i] === '--double-prev') {
      if (i > 0 && result[i - 1] !== null) {
        result[i] = result[i - 1]
      } else {
        result[i] = null
      }
    }
  }
  return result.filter(el => el !== null)
}

module.exports = {
  transform
};
