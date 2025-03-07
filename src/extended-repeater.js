const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let string = String(str)
  let repeatTimes = options.repeatTimes || 1
  let separator = options.separator !== undefined ? options.separator : '+'
   

  let additionString =  options.addition !== undefined ? String(options.addition) : ''
  let additionRepeatTimes = options.additionRepeatTimes || 1
  let additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|'

  let addition = Array.from({length: additionRepeatTimes}, () => additionString).join(additionSeparator) 
  
  let fullString = string + addition;
  return  Array.from({length: repeatTimes}, () => fullString).join(separator) 
}

module.exports = {
  repeater
};
