// Задание 8.
// Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
// Используйте шаблонные строки.

let fruits = new Map();
  fruits.set("apple", "green");
  fruits.set("strawberry","red");
  fruits.set("blueberry","blue");
for (let nameFruit of fruits.keys()) {
    let colorFruit = fruits.get(nameFruit);
    console.log(`Ключ - ${nameFruit}, значение - ${colorFruit}`)
}
