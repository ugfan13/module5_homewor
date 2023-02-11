// Задание 5
// Дан произвольный массив. Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.

let arrNew = [];

for (let i = 0; i < 5; i++) {
    function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  arrNew.unshift(randomNumber(0,100))
}

console.log(arrNew);
console.log(arrNew.length)

