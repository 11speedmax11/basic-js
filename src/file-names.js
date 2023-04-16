const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( /*names*/  ) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
 /* let z = false;
  do{
    console.log("------------------");
    z = false;
    for ( let i = 1; i < names.length; i++){
      let count = 0;
      console.log(names);
      for ( let j = 0; j < i; j++){
        
        if ( names[i] == names[j] ){
          count++
        }
      }
      if (count){
        z = true
        names[i] = names[i] + `(${count})` 
        }
    }
  } while(z)
  return names;*/
}

//npmconsole.log(renameFiles(["file", "file", "image", "file(1)", "file"]));

module.exports = {
  renameFiles
};
