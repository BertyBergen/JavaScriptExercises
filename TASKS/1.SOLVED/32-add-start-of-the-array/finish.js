/** ЗАДАЧА 32 - Добавление элементов в начало массива
 *
 * 1. Добавьте элементы а начало массива:
 *  - сначала строку "Привет"
 *  - потом число 100
 *
 * 2. Выведите длину результирующего массива в консоль
 */

const myArray = [true, null];
const myArray2 = [1, 2, 3, 4, 5];

// Напишите код здесь

myArray.unshift(100, "Привет");
console.log(myArray); // [100, "Hello", true, null]
