//  ЗАДАЧА 31 - Интервалы и Таймауты

// //  Используйте следующие встроенные функции:

//  setTimeout
//  setInterval
//  clearInterval

// //  Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
//  "Сообщение номер 1"
//  "Сообщение номер 2"
//  "Сообщение номер 3"
//  "Сообщение номер 4"
//  "Сообщение номер 5"
let i = 1;
const setIntervalID = setInterval(() => {
  console.log(`Hey petuh ${i}`);
  i++;
}, 2000);

// setTimeout(() => {
//   return clearInterval(setIntervalID); //Можно без ретерна нахойуй
// }, 15000);
setTimeout(() => clearInterval(setIntervalID), 1.1 * 10 ** 4);
setTimeout(() => {
  console.log("Petushara zakonchilsya");
}, 11000);
