const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  reverse;
  constructor(...args) {
    if (args.length > 0)
      this.reverse = args[0]
    else
      this.reverse = true
  }

  encrypt(...args) {
    if(args.length != 2){
      throw new Error("Incorrect arguments!")
    }
    if(typeof args[0] != typeof "ddd" || typeof args[1] != typeof "ddd"){
      throw new Error("Incorrect arguments!")
    }
    let encryptedText = '';
    let keyIndex = 0;

    for (let i = 0; i < args[0].length; i++) {
      const char = args[0][i].toUpperCase();


      if (char >= 'A' && char <= 'Z') {
        const keyChar = args[1][keyIndex % args[1].length].toUpperCase();
        const shift = keyChar.charCodeAt(0) - 'A'.charCodeAt(0);
        const encryptedChar = String.fromCharCode(((char.charCodeAt(0) - 'A'.charCodeAt(0) + shift) % 26) + 'A'.charCodeAt(0));
        encryptedText += encryptedChar;
        keyIndex++;
      } else {
        encryptedText += char;
      }
    }
    if (this.reverse) {
      return encryptedText;
    } else {
      return encryptedText.split('')
        .reverse()
        .join('');
    }

  }
  decrypt(...args) {
    if(args.length != 2){
      throw new Error("Incorrect arguments!")
    }
    if(typeof args[0] != typeof "ddd" || typeof args[1] != typeof "ddd"){
      throw new Error("Incorrect arguments!")
    }
    let decryptedText = '';
    let keyIndex = 0;


    for (let i = 0; i < args[0].length; i++) {
      const char = args[0][i].toUpperCase();


      if (char >= 'A' && char <= 'Z') {
        const keyChar = args[1][keyIndex % args[1].length].toUpperCase();
        const shift = keyChar.charCodeAt(0) - 'A'.charCodeAt(0);
        const decryptedChar = String.fromCharCode(((char.charCodeAt(0) - 'A'.charCodeAt(0) - shift + 26) % 26) + 'A'.charCodeAt(0));
        decryptedText += decryptedChar;
        keyIndex++;
      } else {
        decryptedText += char;
      }
    }
    if (this.reverse) {
      return decryptedText;
    } else {
      return decryptedText.split('')
        .reverse()
        .join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
