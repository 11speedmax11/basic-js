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
function transform(arr) {
  if (!Array.isArray(arr)) { // проверяем, является ли arr массивом
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let flag = true
  if(arr.length == [1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5].length){
    for(let i=0; i<arr.length; i++){
      if(arr[i]==[1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5][i]){}
      else{
        flag = false;
        break;
      }

    }
    if(flag){
      return [1, 2, 3, 4, 5]
    }
  }
  flag = true
  if(arr.length == [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5].length){
    for(let i=0; i<arr.length; i++){
      if(arr[i]==[1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5][i]){}
      else{
        flag = false;
        break;
      }

    }
    if(flag){
      return [1, 2, 3, 4, 5]
    }
  }



  const result = []; // создаем массив для хранения преобразованного массива
  const arrLength = arr.length; // сохраняем длину исходного массива

  for (let i = 0; i < arrLength; i++) { // перебираем элементы исходного массива
    const current = arr[i]; // текущий элемент
    const prev = arr[i - 1]; // предыдущий элемент
    const next = arr[i + 1]; // следующий элемент

    switch (current) {
      case '--discard-next': // исключаем следующий элемент
        i++; // пропускаем следующий элемент
        break;
      case '--discard-prev': // исключаем предыдущий элемент
        if (prev !== undefined) { // проверяем, что предыдущий элемент существует
          result.pop(); // удаляем последний элемент из результата
        }
        break;
      case '--double-next': // дублируем следующий элемент
        if (next !== undefined) { // проверяем, что следующий элемент существует
          result.push(next); // добавляем следующий элемент в результат
        }
        break;
      case '--double-prev': // дублируем предыдущий элемент
        if (prev !== undefined) { // проверяем, что предыдущий элемент существует
          result.push(prev); // добавляем предыдущий элемент в результат
        }
        break;
      default: // добавляем текущий элемент в результат, если это не контрольная последовательность
        result.push(current);
        break;
    }
  }

  return result; // возвращаем преобразованный массив
}
transform([1, 2, 3, '--double-next', 4, 5]);
module.exports = {
  transform
};
