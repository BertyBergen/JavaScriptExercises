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

// const MIN = 1000;
// const MAX = 9999;

const myNumbers2 = [2355, 7235];
const myNumbers = [2355, 7235, 8135, 1762, 2361, 8351, 2345];

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// let newNumber = randomNumber(MIN, MAX);

const addRandomNumberToArray = (min, max, array) => {
  const newArray = [...array];
  let newNumber = randomNumber(min, max);
  newArray.forEach((element, index) => {
    if (newNumber === newArray[index]) {
      newNumber = randomNumber(min, max);
    }
  });

  newArray.push(newNumber);
  return newArray;
};

console.log(myNumbers.push("asdjn"));
const newArray = addRandomNumberToArray(1000, 9999, myNumbers);
console.log(myNumbers, "Original Array");
console.log(newArray, "Updated Array");

console.log(myNumbers.length);
