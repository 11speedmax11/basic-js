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
function transform( arr ) {
  if (!Array.isArray(arr)){ 
    return `'arr' parameter must be an instance of the Array!`
  }
  let res = [...arr];
  for ( let i = 0; i < res.length; i++){
    if( res[i] == '--discard-next'){
      
      res[i] = 'delete me';
      res[i+1] = 'delete me';
    }
    if( res[i] == '--discard-prev'){
      res[i] = 'delete me';
      res[i-1] = 'delete me';
    }
  }
  res = res.filter(item => item != 'delete me');

  for ( let i = 0; i < res.length; i++){
    if( res[i] == '--double-next'){
      if (i == res.length-1){
        res[i] = 'delete me'
      } else {
        res[i] = res[i+1];
      }
      
      
    }
    if( res[i] == '--double-prev'){
      if (i == 0){
        res[i] = 'delete me'
      } else {
        res[i] = res[i-1];
      }
    }
  }
  res = res.filter(item => item != 'delete me');

  console.log(res);
  console.log(arr);
  return res
}
transform([1, 2, 3, '--double-next', 4, 5]);
module.exports = {
  transform
};
