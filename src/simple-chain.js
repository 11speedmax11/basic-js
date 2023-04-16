const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  value: [],
  getLength() {
    return chainMaker.value.length
  },
  addLink( val ) {
    chainMaker.value.push(`${val}`);
    return chainMaker
  },
  removeLink( position ) {
    if(typeof position != "number" || position%1 !=0 || position > chainMaker.value.length){
      throw new Error("You can't remove incorrect link!");
      
    }
    chainMaker.value.splice(position-1,1);
   
    return chainMaker
  },
  reverseChain() {
    chainMaker.value.reverse();
    return chainMaker
  },
  finishChain() {
    let i=chainMaker.value.map(item => item = `( ${item} )`).join('~~');
    chainMaker.value=[]
    return i;
  }
};



console.log(chainMaker.addLink(6).addLink(5).addLink(4).addLink(3).addLink(2).addLink(1).removeLink(2).finishChain())


module.exports = {
  chainMaker
};
