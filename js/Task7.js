// Задание 7.
// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

let arrNew7 = [];

for (let i = 0; i < 5; i++) {
    function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  arrNew7.unshift(randomNumber(0,100))
}

console.log(arrNew7);
let y = 0;
let z = 0;
for (let i = 0; i < arrNew7.length; i++) {
  if (arrNew7[i] % 2 == 0) {
    y++
  } else {
    z++
  }  
}

console.log(`Количество четных ${y}, количество нечётных ${z}`)

