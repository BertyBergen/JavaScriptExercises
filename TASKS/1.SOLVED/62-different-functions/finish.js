/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */

function firstFunction(a, b) {
  console.log(arguments);
  return a + b;
}

const secondFunction = function (a, b) {
  console.log(arguments);
  return a + b;
};

console.log(firstFunction(13, 15));
console.log(secondFunction(13, 15));
