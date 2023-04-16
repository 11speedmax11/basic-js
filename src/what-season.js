const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
    
    if (!date){return 'Unable to determine the time of year!'}
    if (!(typeof date == 'object' && Date.parse(date))){
      return "Invalid date!"
    }
    let x = date.getMonth();
    let seasons = ["winter","winter","spring","spring","spring","summer","summer","summer","autumn","autumn","autumn","winter"]
    return seasons[x];
}

const springDate = new Date(2010, 11, 20);

console.log(springDate)

console.log(getSeason(springDate));
module.exports = {
  getSeason
};
