/** ЗАДАЧА 80 - Сумма положительных и отрицательных чисел
 *
 * 1. Создайте функцию "sumPositiveNegative", которая принимает массив
 * и суммирует отдельно положительные и отрицательные числа.
 *
 * 2. Функция должна вернуть такой объект:
 *  {
 *    positive: 74, // сумма всех положительных чисел
 *    negative: -54 // сумма всех отрицательных чисел
 *  }
 */

const nums = [10, -12, 30, -1, -8, 0, 14, -33, 20];

// const sumPositiveNegative = (nums) => {
//   let sumPositive, sumNegative;
//   sumPositive = 0;
//   sumNegative = 0;
//   nums.forEach((number) => {
//     if (number > 0) {
//       sumPositive += number;
//     }
//   });
//   nums.forEach((number) => {
//     if (number < 0) {
//       sumNegative += number;
//     }
//   });
//   return { postive: sumPositive, negative: sumNegative };
// };

function sumPositiveNegative(nums) {
  return nums.reduce(
    (sum, number) => {
      if (number > 0) {
        console.log(number);
        return {
          ...sum,
          positive: sum.positive + number,
        };
      }

      return {
        ...sum,
        negative: sum.negative + number,
      };
    },
    { positive: 0, negative: 0 }
  );
}

const result = sumPositiveNegative(nums);

console.log(result);
// { positive: 74, negative: -54 }
