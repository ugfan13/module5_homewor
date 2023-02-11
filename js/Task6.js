// Задание 6.
// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

let arrNew6 = [];

for (let i = 0; i < 5; i++) {
    function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  arrNew6.unshift(randomNumber(0,100))
}

function unique(arr) {
  return Array.from(new Set(arr));
}

let arrLast = unique(arrNew6);

if (arrNew6.length == arrLast.length) {
  console.log('true')
} else {
  console.log('false')
}
