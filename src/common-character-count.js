const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let map1 = createMap(s1)
  let map2 = createMap(s2)

  return [...map1.keys()].reduce((sum, key)=> {
    return sum + (map2.has(key) ? Math.min(map1.get(key), map2.get(key)) : 0)
  },0)
}

function createMap(string) {
  let map = new Map()
  for (let i = 0; i < string.length; i++) {
    let key = string[i]
    if (map.has(key)) {
      map.set(key, (map.get(key) || 1) + 1)
    } else {
      map.set(key, 1)
    }
  }
  return map
}

module.exports = {
  getCommonCharacterCount
};