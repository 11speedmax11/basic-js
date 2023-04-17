const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  links: [],

  getLength() { 
    return this.links.length;
  },

  addLink(value = '') { 
    this.links.push(`( ${value} )`); 
    return this; 
  },

  removeLink(position) {
    if (typeof position !== 'number' || !Number.isInteger(position) || position < 1 || position > this.links.length) { 
      this.links = []; 
      throw new Error('You can\'t remove incorrect link!'); 
    }
    this.links.splice(position - 1, 1);
    return this; 
  },

  reverseChain() { 
    this.links.reverse(); 
    return this; 
  },

  finishChain() { 
    const result = this.links.join('~~');
    this.links = [];
    return result; 
  }
};



console.log(chainMaker.addLink(6).addLink(5).addLink(4).addLink(3).addLink(2).addLink(1).removeLink(2).finishChain())


module.exports = {
  chainMaker
};
