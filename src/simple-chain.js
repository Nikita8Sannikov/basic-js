const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: '',

  getLength() {
    return this.chain.split('~~').length
  },
  addLink(value) {
    this.chain += this.chain ? (`~~( ${String(value)} )`) : (`( ${String(value)} )`)
   return this
  },
  removeLink(position) {
    if(typeof position !== 'number' || !Number.isInteger(position) || position> this.getLength() || position < 1 ){
      this.chain = ''
      throw new Error ("You can't remove incorrect link!")
    } 
    this.chain =  this.chain.split('~~').filter((_,i) => i!= position - 1).join('~~')
    return this
  },
  reverseChain() {
    this.chain =  this.chain.split('~~').reverse().join('~~')
    return this
  },
  finishChain() {
    const result = this.chain; 
    this.chain = ''; 
    return result;
  }
};

module.exports = {
  chainMaker
};
