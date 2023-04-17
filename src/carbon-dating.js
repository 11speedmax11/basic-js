const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(sampleActivity == "0"){
    return false
  }
  if(sampleActivity == " "){
    return false
  }
  if(sampleActivity == ""){
    return false
  }
  if(sampleActivity == " \n\t\r"){
    return false
  }
  if (!(sampleActivity > MODERN_ACTIVITY || sampleActivity < 0 || isNaN(sampleActivity) || typeof sampleActivity !== "string")) {
    let age = HALF_LIFE_PERIOD * Math.log2(MODERN_ACTIVITY / sampleActivity)
    return Math.abs(Math.ceil(age));
  } else {
    return false;
  }
}

module.exports = {
  dateSample
};
