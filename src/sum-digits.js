const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} 
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  console.log(n)
  let x = 0;
  n=String(n).split('');
  for( let i = 0; i < n.length; i++){
      x+=Number(n[i]);
  }
  if (x >= 10){
    x = getSumOfDigits(x);
  }
  return x
}
console.log(getSumOfDigits(91));
module.exports = {
  getSumOfDigits
};
