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
  let res = []
          let result = [0,'']
          let counter = function (strin) {
                      let i = 0;
                      if(strin[i] != strin[i+1]){
                        result[0]++;
                        result[1]=strin[i];
                        str = str.slice(result[0])
                      
                      } else {
                      do {   
                        if(strin[i]==strin[i+1]){
                              result[0]++;
                              result[1]=strin[i];
                              i++;
                            } else{
                              result[0]++;
                              result[1]=strin[i];
                              str = str.slice(result[0])
                              i=0;
                            }
                        } while ( i!=0 );
                      }
                      res.push((result[0] === 1 ? result[1] : result.join('')));
                      result = [0,''];
                      return ;
              }
          
          while( str != ''){
              counter(str);
          }

          
        
          return res.join('');
}



module.exports = {
  encodeLine
};
