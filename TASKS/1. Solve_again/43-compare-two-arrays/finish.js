/** ЗАДАЧА 43 - Сравнение двух массивов
 *
 * 1. Создайте функцию "areArraysEqual" с двумя параметрами "firstArray" и "secondArray"
 *
 * 2. Верните "true" если два массива равны, а именно:
 *  - имеют одинаковое количество элементов
 *  - все элементы совпадают, например, firstArray[0] === secondArray[0] и т. д.)
 *
 * 3. В противном случае верните "false"
 *
 * ВАЖНО: Исходите из того, что массивы содержат элементы примитивных типов
 */

const a = [1, 2, 3, 6];
const b = [1, 2, 3, 6];

// console.log(a === b); // false (Почему?)
const c = [2, 1, 3];
const d = [1, 2, 3, 4];

function areArraysEqual(firstArray, secondArray) {
  return (
    firstArray.length === secondArray.length &&
    firstArray.every(
      (index) => (firstArray[index] === secondArray[index] ? true : false)
      //firstArray.every((elem, index) =>
      //elem === secondArray[index] ? true : false
    )
  );
  //return false //Надо ли добавлять?
}
//   ? true
//   : false;

console.log(areArraysEqual(a, b)); // true
console.log(areArraysEqual(a, c)); // false
console.log(areArraysEqual(a, d)); // false
