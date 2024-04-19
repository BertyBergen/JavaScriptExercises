/** ЗАДАЧА 36 - Случайные числа
 *
 * 1. Cгенерируйте новое 4-значное случайное число.
 * Диапазон для случайного числа 1000 - 9999.
 *
 * 2. Убедитесь, что это новое случайное число не совпадает ни с одним из чисел в массиве myNumbers.
 *
 * 3. Если совпадает, вам нужно сгенерировать новое 4-значное число.
 *
 * 4. Если совпадений нет (новый номер уникален), добавьте его в массив myNumbers.
 *
 * ВАЖНО: В решении задачи используйте функции:
 *  - для генерации случайного числа в заданном диапазоне
 *  - для добавления случайного числа в массив с возвратом измененного массива
 */

const MIN = 1000;
const MAX = 9999;

const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351];
// const myNumbers = [1, 3, 5, 2, 7, 9];

const randomNumbers = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

const addRandomNumberToArray = (arr, min, max) => {
  let newNumber;
  const newArray = [...arr];
  do {
    newNumber = randomNumbers(min, max);
    console.log(newNumber);
  } while (newArray.includes(newNumber));

  newArray.push(newNumber);
  return newArray;
};
const changedNumbers = addRandomNumberToArray(myNumbers, MIN, MAX);

console.log("FORMER ARRAY", myNumbers);
console.log("_______________________________________________");
console.log("Updated Array", changedNumbers);
