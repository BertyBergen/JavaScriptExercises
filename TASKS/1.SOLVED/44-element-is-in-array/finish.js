/** ЗАДАЧА 44 - Поиск элементов примитивных типов в массиве
 *
 * 1. Создайте функцию isElementInArray с двумя параметрами "inputArray" и "searchElement"
 *
 * 2. Если "searchElement" найден в "inputArray" - вернуть "true"
 *
 * 3. В противном случае вернуть "false"
 */

const isElementInArray_1 = (inputArray, searchElement) =>
  inputArray.some((elem, index) => (elem === searchElement ? true : false));
function isElementInArray(inputArray, searchElement) {
  return inputArray.includes(searchElement);
}
const transports = ["Bus", "Car", "Bicycle", "Airplane"];
console.log(isElementInArray(transports, "Bus")); // true
console.log(isElementInArray(transports, "Phone")); // false
console.log(isElementInArray(transports, "Airplane")); // true
console.log(isElementInArray(transports, "Bicycle")); // true
