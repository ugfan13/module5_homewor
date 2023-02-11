//Задание 3.
//Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

const strStart = "Hello";
let revers = strStart.split('').reverse().join('');
// revers.reverse();
// revers.join('');
console.log(revers)