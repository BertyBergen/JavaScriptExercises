/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */
const cars = [
  {
    carBrand: "Toyota",
    price: 234,
    isAvailableForSale: true,
  },
  {
    carBrand: "BMW",
    price: 666,
    isAvailableForSale: true,
  },
  {
    carBrand: "Lexus",
    price: 234,
    isAvailableForSale: true,
  },
];
const newCar = {
  carBrand: "Zaporojec",
  price: 99999999,
  isAvailableForSale: true,
};
cars.push(newCar);
console.log(cars);
